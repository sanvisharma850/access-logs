const stage = localStorage.getItem("challenge5_stage");

if (stage !== "admin") {
  document.body.innerHTML = `
    <h1>ROOT ACCESS DENIED</h1>
    <p>This account was never audited.</p>
  `;
  throw new Error("Admin access blocked");
}
localStorage.removeItem("challenge5_stage");
