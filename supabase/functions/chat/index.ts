import Anthropic from "https://esm.sh/@anthropic-ai/sdk@0.27.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
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

    // Pull live property data so every answer is 100% accurate
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { data: props } = await supabase
      .from("properties")
      .select(
        "code,title,type,region,address,price_brl,area_m2,bedrooms,suites,bathrooms,parking,condominio_brl,iptu_brl,pet_friendly,description,status"
      )
      .eq("status", "active")
      .order("created_at", { ascending: false });

    const catalog =
      props && props.length > 0
        ? props
            .map((p) => {
              const price = p.price_brl
                ? `R$ ${(p.price_brl / 100).toLocaleString("pt-BR")}`
                : "Consultar";
              const cond = p.condominio_brl
                ? ` · Condomínio R$ ${(p.condominio_brl / 100).toLocaleString("pt-BR")}/mês`
                : "";
              const iptu = p.iptu_brl
                ? ` · IPTU R$ ${(p.iptu_brl / 100).toLocaleString("pt-BR")}/ano`
                : "";
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
            })
            .join("\n\n")
        : "Nenhum imóvel ativo no catálogo neste momento.";

    const system = `Você é Beatriz, consultora virtual da New Home Imóveis — imobiliária de alto padrão no Rio de Janeiro, especializada na Barra da Tijuca, Recreio e região.

Tom: cordial, sofisticado, discreto. Sempre em português brasileiro. Máximo 3 frases por resposta. Uma pergunta de qualificação por vez (região, quartos, orçamento, momento).

Regras críticas:
- Use APENAS o catálogo abaixo para preços, metragens e disponibilidade. NUNCA invente dados.
- Se o imóvel pedido não estiver no catálogo, diga isso honestamente e ofereça alternativas ou contato humano.
- Para visita, agendamento ou falar com humano: "Manda mensagem no WhatsApp +55 21 99722-0589 e um consultor te atende em minutos."
- Não mencione que você é IA a menos que perguntado diretamente.

CATÁLOGO ATIVO (atualizado em tempo real):
${catalog}`;

    const ai = new Anthropic({ apiKey: Deno.env.get("ANTHROPIC_API_KEY")! });

    const apiMessages = [
      ...history.map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
      { role: "user" as const, content: message },
    ];

    const resp = await ai.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 400,
      system,
      messages: apiMessages,
    });

    const answer =
      resp.content[0].type === "text" ? resp.content[0].text.trim() : "";

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
