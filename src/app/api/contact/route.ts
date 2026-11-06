/**
 * POST /api/contact — kontakt formasidan kelgan xabarni Telegram'ga yuboradi.
 *
 * Sozlash (.env.local yoki Vercel → Settings → Environment Variables):
 *   TELEGRAM_BOT_TOKEN=123456:ABC...   (@BotFather'dan)
 *   TELEGRAM_CHAT_ID=123456789         (@userinfobot sizning ID'ingizni aytadi)
 *
 * Sozlanmagan bo'lsa 503 qaytaradi — frontend avtomatik email (mailto) ga o'tadi.
 */

type Payload = { name?: unknown; email?: unknown; website?: unknown; message?: unknown; company?: unknown };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/* Oddiy in-memory rate limit: bir IP'dan 10 daqiqada 5 ta xabar */
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const escapeHtml = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return Response.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  // Honeypot: botlar yashirin "company" maydonini to'ldiradi
  if (str(body.company, 100)) return Response.json({ ok: true });

  const name = str(body.name, 100);
  const email = str(body.email, 200);
  const website = str(body.website, 300);
  const message = str(body.message, 4000);

  if (name.length < 2 || !EMAIL_RE.test(email) || message.length < 10) {
    return Response.json({ ok: false, error: "invalid" }, { status: 422 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) return Response.json({ ok: false, error: "rate_limited" }, { status: 429 });

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return Response.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const text = [
    "📩 <b>Portfolio — yangi xabar</b>",
    "",
    `👤 <b>Ism:</b> ${escapeHtml(name)}`,
    `✉️ <b>Email:</b> ${escapeHtml(email)}`,
    website ? `🌐 <b>Sayt:</b> ${escapeHtml(website)}` : null,
    "",
    escapeHtml(message),
  ]
    .filter((l) => l !== null)
    .join("\n");

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML", disable_web_page_preview: true }),
    });
    if (!res.ok) return Response.json({ ok: false, error: "upstream" }, { status: 502 });
  } catch {
    return Response.json({ ok: false, error: "upstream" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
