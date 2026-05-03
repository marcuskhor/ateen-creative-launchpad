import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface InquiryPayload {
  fullName: string;
  phone?: string;
  email: string;
  company?: string;
  brandStage: string;
  budget: string;
  message: string;
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const data = (await req.json()) as InquiryPayload;

    if (!data.fullName || !data.email || !data.message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const host = Deno.env.get("SMTP_HOST")!;
    const username = Deno.env.get("SMTP_USERNAME")!;
    const password = Deno.env.get("SMTP_PASSWORD")!;

    console.log(`SMTP attempt host=${host} user=${username} passLen=${password.length}`);

    // Try multiple host/port combinations common to cPanel servers
    const attempts = [
      { hostname: host, port: 465, tls: true },
      { hostname: host, port: 587, tls: false },
      { hostname: `mail.${host.replace(/^mail\./, "")}`, port: 465, tls: true },
      { hostname: `mail.${host.replace(/^mail\./, "")}`, port: 587, tls: false },
    ];

    let client: SMTPClient | null = null;
    let lastErr: unknown = null;
    for (const cfg of attempts) {
      try {
        console.log(`Trying ${cfg.hostname}:${cfg.port} tls=${cfg.tls}`);
        const c = new SMTPClient({
          connection: {
            hostname: cfg.hostname,
            port: cfg.port,
            tls: cfg.tls,
            auth: { username, password },
          },
        });
        // Force a connection by sending a NOOP via send below; if auth fails we throw
        client = c;
        // success path: break and use this client
        break;
      } catch (e) {
        lastErr = e;
        console.log(`Failed ${cfg.hostname}:${cfg.port}: ${e instanceof Error ? e.message : e}`);
      }
    }
    if (!client) throw lastErr ?? new Error("All SMTP attempts failed");

    const rows: [string, string][] = [
      ["Full Name", data.fullName],
      ["Phone", data.phone || "—"],
      ["Email", data.email],
      ["Company / Industry", data.company || "—"],
      ["Brand Stage", data.brandStage],
      ["Budget", data.budget],
      ["Message", data.message],
    ];

    const html = `
      <div style="font-family:Arial,sans-serif;color:#111;max-width:600px">
        <h2 style="margin:0 0 16px">New Inquiry — ATEENWORKS</h2>
        <table style="border-collapse:collapse;width:100%">
          ${rows
            .map(
              ([k, v]) =>
                `<tr><td style="padding:8px;border:1px solid #eee;background:#fafafa;font-weight:bold;width:180px">${k}</td><td style="padding:8px;border:1px solid #eee;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
            )
            .join("")}
        </table>
      </div>`;

    const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

    await client.send({
      from: `ATEENWORKS Inquiries <${username}>`,
      to: "hello@ateenworks.com",
      replyTo: data.email,
      subject: `New Inquiry — ${data.fullName}`,
      content: text,
      html,
    });

    await client.close();

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("send-inquiry error:", err);
    const msg = err instanceof Error ? err.message : "Unknown error";
    return new Response(JSON.stringify({ success: false, error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});