function sanitize(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  const name = sanitize(request.body?.name, 120) || "Anonymous";
  const message = sanitize(request.body?.message, 4000);
  const region = sanitize(request.body?.region, 180) || "Unknown region";
  const pageUrl = sanitize(request.body?.pageUrl, 500);

  if (!message) {
    response.status(400).json({ error: "Feedback message is required" });
    return;
  }

  // Set RESEND_API_KEY in Vercel Environment Variables.
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.FEEDBACK_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey) {
    response.status(503).json({ error: "Feedback email is not configured yet" });
    return;
  }

  try {
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "User-Agent": "FeatherCast/1.0",
      },
      body: JSON.stringify({
        from: `FeatherCast Feedback <${fromEmail}>`,
        to: ["josetron@gmail.com"],
        subject: `FeatherCast feedback from ${name}`,
        text: [
          `Name: ${name}`,
          `Region: ${region}`,
          pageUrl ? `Page: ${pageUrl}` : "",
          "",
          message,
        ]
          .filter(Boolean)
          .join("\n"),
        html: `
          <h2>FeatherCast feedback</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Region:</strong> ${escapeHtml(region)}</p>
          ${pageUrl ? `<p><strong>Page:</strong> ${escapeHtml(pageUrl)}</p>` : ""}
          <hr />
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const detail = await emailResponse.text();
      throw new Error(detail || "Email provider rejected the message");
    }

    response.status(200).json({ ok: true });
  } catch (error) {
    response.status(502).json({ error: "Could not send feedback email" });
  }
}
