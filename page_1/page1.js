const allowed = localStorage.getItem("challenge4_completed");

if (allowed !== "true") {
  document.body.innerHTML = `
    <h1>403 — Incomplete Audit Trail</h1>
    <p>Some logs were never meant to be seen.</p>
  `;
  throw new Error("Unauthorized access to Challenge 5");
}
