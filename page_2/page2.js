const stage = localStorage.getItem("challenge5_stage");

if (stage !== "page_2") {
  document.body.innerHTML = `
    <h1>403 — Incomplete Log Chain</h1>
    <p>Some entries are missing.</p>
  `;
  throw new Error("Unauthorized progression");
}
function completePage2() {
  localStorage.setItem("challenge5_stage", "admin");
  window.location.href = "https://sanvisharma850.github.io/access-logs/Admin";
}
