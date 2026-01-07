/* Audio */
const audio = {
  heartbeat: new Audio("assets/audio/heartbeat.mp3"),
  glitch: new Audio("assets/audio/glitch.mp3"),
  unlock: new Audio("assets/audio/unlock_low.mp3")
};

audio.heartbeat.loop = true;
audio.heartbeat.volume = 0.35;
audio.glitch.volume = 0.4;
audio.unlock.volume = 0.2;

/* State */
let falsePathTaken = false;
let inRiddle = false;
let challengeLocked = false;

/* Boot logs (CTF flavor) */
console.log("Syncing contacts...");
console.log("Restoring chat cache...");
console.warn("Last backup incomplete.");

/* App logic */
function openApp(app) {
  const view = document.getElementById("app-view");
  const content = document.getElementById("app-content");
  const backBtn = document.getElementById("backBtn");

  view.classList.add("active");
  content.classList.remove("glitch");
  backBtn.style.display = "block";
  inRiddle = false;

  document.querySelectorAll(".app").forEach(a => {
    a.disabled = false;
    a.style.opacity = 1;
  });

  if (app === "notes") {
    content.textContent = falsePathTaken
      ? `If something happens to me:\n\nCheck commit timing.\nCheck what was deleted.\n\nAbsence is also evidence.\n\nPublic access leaves fingerprints.
Infrastructure assumes permission.
`
      : `If something happens to me:\n\nArguments are loud.\nAccess is quiet.\n\nAbsence is also evidence.\n\n Public access leaves fingerprints.
Infrastructure assumes permission.
`;
  }

  if (app === "chat") {
    content.textContent =
`[23:47] Kunal: You said this was temporary. 
[23:49] Dr. Goyal: You don’t get to decide that. 
[23:52] Kunal: You’re selling access. 
[23:53] Dr. Goyal: I’m documenting misuse. 
[23:56] Kunal: If this gets out, you’re finished. 
[typing…] 
[typing stopped] 
[Seen 00:01]`;
  }

  if (app === "calls") {
    content.textContent =
`OUTGOING
00:12 — KUNAL VERMA 
Duration: 02:31 

INCOMING 
12:58 — KUNAL VERMA 
Duration: 00:00 (MISSED) 

MISSED 
12:41 — CAMPUS EXT

Notes auto-saved.`;
  }

  if (app === "gallery") {
    content.innerHTML =
`<img src="assets/gallery/ip_crop.png" style="width:100%;border-radius:10px">
Metadata stripped.`;
    navigator.vibrate?.([30,30,30]);
  }

  if (app === "riddle") {
    inRiddle = true;
    backBtn.style.display = "none";

    document.querySelectorAll(".app").forEach(a => {
      a.disabled = true;
      a.style.opacity = 0.6;
    });

    content.innerHTML =
`I argued.
I threatened.
I stayed.

Am I the killer,
or just the last witness?

<button class="choice" onclick="choose('caller')">Option A: The last caller</button>
<button class="choice" onclick="choose('editor')">Option B: The last editor</button>

<div class="system">This action cannot be undone.</div>`;
  }
}

function closeApp() {
  if (inRiddle && challengeLocked) return;
  document.getElementById("app-view").classList.remove("active");
}

function choose(choice) {
  challengeLocked = true;
  inRiddle = false;

  const content = document.getElementById("app-content");

  document.querySelectorAll(".choice").forEach(b => {
    b.disabled = true;
    b.style.opacity = 0.6;
  });

  if (choice === "caller") {
    falsePathTaken = true;
    audio.heartbeat.play();
    audio.glitch.play();
    navigator.vibrate?.([120,80,120,200]);

    content.classList.add("glitch");
    content.innerHTML =
`Timeline correlation found.

Conclusion confidence: HIGH

<span class="system">
Emotional correlation is not causation.
</span>`;
  }

if (choice === "editor") {
  audio.heartbeat.pause();
  audio.unlock.play();
  navigator.vibrate?.([40]);

  content.innerHTML = `
    <div class="system">
      <p><strong>ACCESS CONFIRMED</strong></p>

      <p>You were not the killer.</p>
      <p>You were the last editor.</p>

      <p>Logs were altered after the event.</p>
      <p>The system preserved the truth.</p>

      <br>

      <button class="choice" id="proceedBtn">
        Proceed to Access Logs
      </button>
    </div>
  `;

  document
    .getElementById("proceedBtn")
    .addEventListener("click", () => {
      window.location.href =
        "https://sanvisharma850.github.io/access-logs/logs.html";
    });
}


/* DevTools trap */
let devtoolsOpen = false;
setInterval(() => {
  const t = performance.now();
  debugger;
  if (performance.now() - t > 100 && !devtoolsOpen) {
    devtoolsOpen = true;
    console.clear();
    console.error("Unauthorized inspection detected.");
    console.info("The killer isn’t in the arguments.");
  }
}, 1000);
