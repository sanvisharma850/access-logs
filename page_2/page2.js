const stage = localStorage.getItem("challenge5_stage");

if (stage !== "page_2") {
  document.body.innerHTML = `
    <h1>403 — Incomplete Log Chain</h1>
    <p>Some entries are missing.</p>

    <p>
      <a href="https://sanvisharma850.github.io/institute-verify/Stages1.html" style="
        color: #0ff;
        text-decoration: none;
        font-family: monospace;
      ">
        → Return to Encryption Layer
      </a>
    </p>
  `;
  throw new Error("Unauthorized progression");
}

function completePage2() {
  localStorage.setItem("challenge5_stage", "admin");
  window.location.href = "https://sanvisharma850.github.io/access-logs/Admin";
}
