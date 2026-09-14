export default async function handler(req, res) {
  const allowedOrigins = [
    "https://nantunggaputra.github.io",
    "https://nantunggaputra-frontend-web.vercel.app",
    "https://nantunggaputra.netlify.app",
  ];

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Preflight request
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ success: false, error: "Data tidak lengkap" });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return res.status(500).json({ success: false, error: "Server configuration error" });
    }

    const text = `*Pesan Baru dari Homepage Portfolio*\n\n` +
                 `*Nama:* ${name}\n` +
                 `*E-mail:* ${email}\n` +
                 `*Telepon:* ${phone}\n` +
                 `*Pesan:* ${message}`;

    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
      }
    );

    if (!response.ok) throw new Error("Telegram API error");

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ success: false, error: "Gagal mengirim pesan" });
  }
      }
