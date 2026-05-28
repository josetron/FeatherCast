import crypto from "node:crypto";

const FEEDBACK_SPREADSHEET_ID =
  process.env.GOOGLE_FEEDBACK_SPREADSHEET_ID || "120WL6INocgYrOP4OO0KW6zNSz0FAhk8tz45PZ8MHcwI";
const FEEDBACK_SHEET_RANGE = process.env.GOOGLE_FEEDBACK_SHEET_RANGE || "A:D";
const FEEDBACK_WEBHOOK_URL = process.env.GOOGLE_FEEDBACK_WEBHOOK_URL || "https://script.google.com/macros/s/AKfycbyNPF2m5CJCahQpd8eIHZbo5MHY7R9adxOD5_tDrYthYkty_wYEpyKJOgDCn8FsqCl0/exec";

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

function base64Url(value) {
  return Buffer.from(value)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function serviceAccountPrivateKey() {
  return String(process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || "")
    .replace(/\\n/g, "\n")
    .trim();
}

function createServiceAccountJwt() {
  const clientEmail = sanitize(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL, 240);
  const privateKey = serviceAccountPrivateKey();

  if (!clientEmail || !privateKey) {
    throw new Error("Google Sheets is not configured. Add GOOGLE_FEEDBACK_WEBHOOK_URL or the Google service-account environment variables.");
  }

  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claim = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };
  const unsignedToken = `${base64Url(JSON.stringify(header))}.${base64Url(JSON.stringify(claim))}`;
  const signature = crypto.sign("RSA-SHA256", Buffer.from(unsignedToken), privateKey);
  return `${unsignedToken}.${base64Url(signature)}`;
}

async function googleAccessToken() {
  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: createServiceAccountJwt(),
    }),
  });

  if (!tokenResponse.ok) {
    throw new Error("Could not authorize Google Sheets");
  }

  const tokenPayload = await tokenResponse.json();
  if (!tokenPayload.access_token) {
    throw new Error("Google Sheets access token missing");
  }
  return tokenPayload.access_token;
}

async function appendFeedbackToSheet({ email, name, submittedAt, message }) {
  if (FEEDBACK_WEBHOOK_URL) {
    const webhookResponse = await fetch(FEEDBACK_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        submittedBy: name,
        submissionDate: submittedAt,
        feedback: message,
      }),
    });

    if (!webhookResponse.ok) {
      throw new Error("Google Sheet webhook rejected the feedback row");
    }
    return;
  }

  const accessToken = await googleAccessToken();
  const appendUrl =
    `https://sheets.googleapis.com/v4/spreadsheets/${FEEDBACK_SPREADSHEET_ID}/values/` +
    `${encodeURIComponent(FEEDBACK_SHEET_RANGE)}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  const sheetResponse = await fetch(appendUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      values: [[email, name, submittedAt, message]],
    }),
  });

  if (!sheetResponse.ok) {
    throw new Error("Could not append feedback to Google Sheet");
  }
}

async function sendFeedbackEmail({ email, name, message, region, pageUrl }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const fromEmail = process.env.FEEDBACK_FROM_EMAIL || "onboarding@resend.dev";
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
        `Email: ${email || ""}`,
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
        <p><strong>Email:</strong> ${escapeHtml(email || "")}</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Region:</strong> ${escapeHtml(region)}</p>
        ${pageUrl ? `<p><strong>Page:</strong> ${escapeHtml(pageUrl)}</p>` : ""}
        <hr />
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    }),
  });

  if (!emailResponse.ok) {
    throw new Error("Could not send feedback email");
  }
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  const email = sanitize(request.body?.email, 240);
  const name = sanitize(request.body?.name, 120) || "Anonymous";
  const message = sanitize(request.body?.message, 4000);
  const region = sanitize(request.body?.region, 180) || "Unknown region";
  const pageUrl = sanitize(request.body?.pageUrl, 500);
  const submittedAt = new Date().toISOString();

  if (!message) {
    response.status(400).json({ error: "Feedback message is required" });
    return;
  }

  try {
    await appendFeedbackToSheet({ email, name, submittedAt, message });
    await sendFeedbackEmail({ email, name, message, region, pageUrl });
    response.status(200).json({ ok: true });
  } catch (error) {
    response.status(502).json({ error: error.message || "Could not save feedback" });
  }
}
