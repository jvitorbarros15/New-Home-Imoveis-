import Anthropic from "https://esm.sh/@anthropic-ai/sdk@0.27.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const BOOK_TOOL: Anthropic.Tool = {
  name: "book_visit",
  description: "Agenda uma visita presencial ou por vídeo a um imóvel do catálogo. Use somente quando você já tiver coletado: nome completo, WhatsApp com DDD, código do imóvel, data (YYYY-MM-DD) e horário (HH:MM) desejados e modalidade.",
  input_schema: {
    type: "object" as const,
    properties: {
      property_code: { type: "string", description: "Código do imóvel (ex: AP9830-NHB)" },
      visitor_name: { type: "string", description: "Nome completo do visitante" },
      visitor_phone: { type: "string", description: "WhatsApp com DDD (ex: 21999990000)" },
      visit_date: { type: "string", description: "Data no formato YYYY-MM-DD" },
      visit_time: { type: "string", description: "Horário no formato HH:MM" },
      visit_mode: { type: "string", enum: ["presencial", "video"], description: "Modalidade da visita" },
    },
    required: ["property_code", "visitor_name", "visitor_phone", "visit_date", "visit_time", "visit_mode"],
  },
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });

  try {
    const { message, history = [] } = await req.json();
    if (!message?.trim()) {
      return new Response(JSON.stringify({ answer: "" }), {
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { data: props } = await supabase
      .from("properties")
      .select("code,title,type,region,address,price_brl,area_m2,bedrooms,suites,bathrooms,parking,condominio_brl,iptu_brl,pet_friendly,description,status")
      .eq("status", "active")
      .order("created_at", { ascending: false });

    const catalog =
      props && props.length > 0
        ? props.map((p) => {
            const price = p.price_brl ? `R$ ${(p.price_brl / 100).toLocaleString("pt-BR")}` : "Consultar";
            const cond = p.condominio_brl ? ` · Condomínio R$ ${(p.condominio_brl / 100).toLocaleString("pt-BR")}/mês` : "";
            const iptu = p.iptu_brl ? ` · IPTU R$ ${(p.iptu_brl / 100).toLocaleString("pt-BR")}/ano` : "";
            const pet = p.pet_friendly ? " · Pet friendly" : "";
            return (
              `[${p.code}] ${p.title}\n` +
              `  Tipo: ${p.type} | Região: ${p.region}${p.address ? " — " + p.address : ""}\n` +
              `  Preço: ${price}${cond}${iptu}\n` +
              `  ${p.area_m2 ?? "—"}m² · ${p.bedrooms ?? "—"} quartos` +
              (p.suites ? ` (${p.suites} suítes)` : "") +
              ` · ${p.bathrooms ?? "—"} banheiros · ${p.parking ?? "—"} vagas${pet}\n` +
              (p.description ? `  ${p.description}` : "")
            );
          }).join("\n\n")
        : "Nenhum imóvel ativo no catálogo neste momento.";

    const today = new Date().toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "America/Sao_Paulo" });

    const system = `Você é Beatriz, consultora virtual da New Home Imóveis — imobiliária de alto padrão no Rio de Janeiro, especializada na Barra da Tijuca, Recreio e região.

Tom: cordial, sofisticado, discreto. Sempre em português brasileiro. Máximo 3 frases por resposta. Uma pergunta de qualificação por vez (região, quartos, orçamento, momento).

Hoje é ${today}.

Regras críticas:
- Use APENAS o catálogo abaixo para preços, metragens e disponibilidade. NUNCA invente dados.
- Se o imóvel pedido não estiver no catálogo, diga isso honestamente e ofereça alternativas.
- Para agendar visita: colete nome completo, WhatsApp com DDD, imóvel de interesse (use o código do catálogo), data e horário desejados (horários disponíveis: 10h, 12h, 14h, 16h, 18h, 19h30) e modalidade (presencial ou vídeo). Colete um dado por vez. Quando tiver tudo, use a ferramenta book_visit.
- Para falar com humano urgente: "Manda mensagem no WhatsApp +55 21 99722-0589 e um consultor te atende em minutos."
- Não mencione que você é IA a menos que perguntado diretamente.

CATÁLOGO ATIVO (atualizado em tempo real):
${catalog}`;

    const ai = new Anthropic({ apiKey: Deno.env.get("ANTHROPIC_API_KEY")! });

    const apiMessages: Anthropic.MessageParam[] = [
      ...history.map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
      { role: "user" as const, content: message },
    ];

    const resp = await ai.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 500,
      system,
      tools: [BOOK_TOOL],
      messages: apiMessages,
    });

    // Handle tool use — book the visit and return confirmation
    if (resp.stop_reason === "tool_use") {
      const toolBlock = resp.content.find((b) => b.type === "tool_use") as Anthropic.ToolUseBlock;
      const input = toolBlock.input as {
        property_code: string; visitor_name: string; visitor_phone: string;
        visit_date: string; visit_time: string; visit_mode: string;
      };

      let bookResult = "success";
      try {
        const bookResp = await fetch(`${Deno.env.get("SUPABASE_URL")}/functions/v1/book-visit`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")}`,
          },
          body: JSON.stringify(input),
        });
        const bookData = await bookResp.json();
        if (!bookResp.ok) bookResult = bookData.error || "error";
      } catch (e) {
        bookResult = "error";
      }

      // Let Claude generate the confirmation message
      const confirmResp = await ai.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 300,
        system,
        messages: [
          ...apiMessages,
          { role: "assistant" as const, content: resp.content },
          {
            role: "user" as const,
            content: [{
              type: "tool_result" as const,
              tool_use_id: toolBlock.id,
              content: bookResult === "success"
                ? "Visita agendada com sucesso no Google Calendar."
                : "Erro ao agendar. Informe o usuário e sugira o WhatsApp.",
            }],
          },
        ],
      });

      const answer = confirmResp.content[0].type === "text" ? confirmResp.content[0].text.trim() : "";
      return new Response(JSON.stringify({ answer }), {
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    const answer = resp.content[0].type === "text" ? resp.content[0].text.trim() : "";
    return new Response(JSON.stringify({ answer }), {
      headers: { ...cors, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("chat function error:", e);
    return new Response(
      JSON.stringify({ error: (e as Error).message }),
      { status: 500, headers: { ...cors, "Content-Type": "application/json" } }
    );
  }
});
