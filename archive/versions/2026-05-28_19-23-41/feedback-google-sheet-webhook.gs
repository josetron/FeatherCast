const SPREADSHEET_ID = "120WL6INocgYrOP4OO0KW6zNSz0FAhk8tz45PZ8MHcwI";

function doPost(event) {
  const payload = JSON.parse(event.postData.contents || "{}");
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheets()[0];

  sheet.appendRow([
    payload.email || "",
    payload.submittedBy || "Anonymous",
    payload.submissionDate || new Date().toISOString(),
    payload.feedback || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
