import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

async function getAccessToken(): Promise<string> {
  const resp = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: Deno.env.get("GOOGLE_CLIENT_ID")!,
      client_secret: Deno.env.get("GOOGLE_CLIENT_SECRET")!,
      refresh_token: Deno.env.get("GOOGLE_REFRESH_TOKEN")!,
      grant_type: "refresh_token",
    }),
  });
  const data = await resp.json();
  if (!data.access_token) throw new Error("Google token error: " + JSON.stringify(data));
  return data.access_token;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });

  try {
    const { property_code, visitor_name, visitor_phone, visit_date, visit_time, visit_mode } =
      await req.json();

    if (!visitor_name?.trim() || !visitor_phone?.trim() || !visit_date || !visit_time) {
      return new Response(JSON.stringify({ error: "Campos obrigatórios ausentes." }), {
        status: 400,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    // Build ISO datetimes in Brasília (UTC-3)
    const [year, month, day] = visit_date.split("-").map(Number);
    const [hour, minute] = visit_time.split(":").map(Number);
    const startIso = new Date(
      Date.UTC(year, month - 1, day, hour + 3, minute)
    ).toISOString();
    const endIso = new Date(
      Date.UTC(year, month - 1, day, hour + 3 + 1, minute)
    ).toISOString();

    // Create Google Calendar event
    const accessToken = await getAccessToken();
    const calendarId = Deno.env.get("GOOGLE_CALENDAR_ID") || "primary";

    const calResp = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          summary: `Visita ${visit_mode} — ${property_code} — ${visitor_name}`,
          description: `Visitante: ${visitor_name}\nWhatsApp: ${visitor_phone}\nImóvel: ${property_code}\nModalidade: ${visit_mode}`,
          start: { dateTime: startIso, timeZone: "America/Sao_Paulo" },
          end: { dateTime: endIso, timeZone: "America/Sao_Paulo" },
        }),
      }
    );

    const calData = await calResp.json();
    const calendarEventId = calData.id ?? null;

    // Save booking to Supabase
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error } = await supabase.from("bookings").insert({
      property_code: property_code ?? "N/A",
      visitor_name,
      visitor_phone,
      visit_date,
      visit_time,
      visit_mode,
      calendar_event_id: calendarEventId,
      status: "confirmed",
    });

    if (error) throw error;

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...cors, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("book-visit error:", e);
    return new Response(
      JSON.stringify({ error: (e as Error).message }),
      { status: 500, headers: { ...cors, "Content-Type": "application/json" } }
    );
  }
});
