const stage = localStorage.getItem("challenge5_stage");

if (stage !== "page_1") {
  document.body.innerHTML = `
    <h1>401 — Session Desynced</h1>
    <p>Audit sequence not initialized.</p>
  `;
  throw new Error("Invalid entry point");
}
function completePage1() {
  localStorage.setItem("challenge5_stage", "page_2");
  window.location.href = "https://sanvisharma850.github.io/access-logs/page_2/";
}
