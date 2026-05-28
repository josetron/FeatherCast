const SPREADSHEET_ID = "120WL6INocgYrOP4OO0KW6zNSz0FAhk8tz45PZ8MHcwI";

function doPost(event) {
  const payload = JSON.parse(event.postData.contents || "{}");
  const email = payload.email || "";
  const name = payload.submittedBy || "Anonymous";
  const date = payload.submissionDate || new Date().toISOString();
  const feedback = payload.feedback || "";

  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheets()[0];
    sheet.appendRow([email, name, date, feedback]);
  } catch (e) {
    console.error("Failed to append row to Google Sheet: " + e.toString());
  }

  // Send feedback to email
  try {
    MailApp.sendEmail({
      to: "josetron@gmail.com",
      subject: `FeatherCast Feedback from ${name}`,
      htmlBody: `
        <h2>New FeatherCast Feedback Received</h2>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr/>
        <p><strong>Feedback Message:</strong></p>
        <p style="white-space: pre-wrap;">${feedback}</p>
      `
    });
  } catch (e) {
    console.error("Failed to send email: " + e.toString());
  }

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
