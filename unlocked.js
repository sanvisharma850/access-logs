/* =======================
   AUDIO SETUP
======================= */
const audio = {
  heartbeat: new Audio("assets/audio/heartbeat.mp3"),
  glitch: new Audio("assets/audio/glitch.mp3"),
  unlock: new Audio("assets/audio/unlock_low.mp3")
};

audio.heartbeat.loop = true;
audio.heartbeat.volume = 0.35;
audio.glitch.volume = 0.4;
audio.unlock.volume = 0.2;

/* =======================
   STATE
======================= */
let falsePathTaken = false;
let decisionMade = false;
let inRiddle = false;

/* =======================
   BOOT LOGS (CTF FLAVOR)
======================= */
console.log("Syncing contacts...");
console.log("Restoring chat cache...");
console.warn("Last backup incomplete.");

/* =======================
   OPEN APP
======================= */
function openApp(app) {
  if (decisionMade && inRiddle) return;

  const view = document.getElementById("app-view");
  const content = document.getElementById("app-content");
  const backBtn = document.getElementById("backBtn");

  view.classList.add("active");
  content.classList.remove("glitch");

  inRiddle = false;

  if (!decisionMade) {
    backBtn.style.display = "block";
  }

  document.querySelectorAll(".app").forEach(a => {
    if (!decisionMade) {
      a.disabled = false;
      a.style.opacity = 1;
    }
  });

  /* NOTES */
  if (app === "notes") {
    content.textContent = falsePathTaken
      ? `If something happens to me:

Check commit timing.
Check what was deleted.

Absence is also evidence.

Public access leaves fingerprints.
Infrastructure assumes permission.`
      : `If something happens to me:

Arguments are loud.
Access is quiet.

Absence is also evidence.

Public access leaves fingerprints.
Infrastructure assumes permission.`;
  }

  /* CHAT */
  if (app === "chat") {
    content.textContent = `[23:47] +91 xxxxxxxxx4: You said this was temporary.
[23:49] Dr. Goyal: You don’t get to decide that.
[23:52] +91 xxxxxxxxx4: You’re selling access.
[23:53] Dr. Goyal: I’m documenting misuse.
[23:56] +91 xxxxxxxxx4: If this gets out, you’re finished.
[typing…]
[typing stopped]
[Seen 00:01]`;
  }

  /* CALLS */
  if (app === "calls") {
    content.textContent = `OUTGOING
00:12 — KUNAL VERMA
Duration: 02:31

INCOMING
12:58 — +91 xxxxxxxxx4
Duration: 00:00 (MISSED)

MISSED
12:41 — CAMPUS EXT

Notes auto-saved.`;
  }

  /* GALLERY */
  if (app === "gallery") {
    content.innerHTML = `
      <img src="assets/gallery/ip_crop.png"
           style="width:100%;border-radius:12px;margin-bottom:8px;">
      <div class="system">Metadata stripped.</div>
    `;
    navigator.vibrate?.([30, 30, 30]);
  }

  /* RIDDLE */
  if (app === "riddle") {
    inRiddle = true;
    backBtn.style.display = "none";

    document.querySelectorAll(".app").forEach(a => {
      a.disabled = true;
      a.style.opacity = 0.6;
    });

    content.innerHTML = `
I argued.
I threatened.
I stayed.

Am I the killer,
or just the last witness?

<button class="choice" onclick="choose('caller')">
Option A: The last caller
</button>

<button class="choice" onclick="choose('editor')">
Option B: The last editor
</button>

<div class="system">
This action cannot be undone.
</div>`;
  }
}

/* =======================
   CLOSE APP
======================= */
function closeApp() {
  if (inRiddle || decisionMade) return;
  document.getElementById("app-view").classList.remove("active");
}

/* =======================
   CHOICE HANDLER
======================= */
function choose(choice) {
  if (decisionMade) return;

  decisionMade = true;
  inRiddle = false;

  const content = document.getElementById("app-content");

  document.querySelectorAll(".choice").forEach(btn => {
    btn.disabled = true;
    btn.style.opacity = 0.6;
  });

  document.getElementById("backBtn").style.display = "none";

  /* FALSE PATH */
  if (choice === "caller") {
    falsePathTaken = true;

    audio.heartbeat.currentTime = 0;
    audio.heartbeat.play();
    audio.glitch.play();
    navigator.vibrate?.([120, 80, 120, 200]);

    content.classList.add("glitch");
    content.innerHTML = `
Timeline correlation found.

Subject proximity: HIGH
Emotional motive: PRESENT

Conclusion confidence: HIGH

<span class="system">
Emotional correlation is not causation.
</span>`;
  }

  /* CORRECT PATH */
  if (choice === "editor") {
    audio.heartbeat.pause();
    audio.unlock.play();
    navigator.vibrate?.([40]);

    content.classList.remove("glitch");
    content.innerHTML = `
<div class="system">
<p><strong>PRIVILEGED ACTION DETECTED</strong></p>

<p>Editor identity unavailable.</p>
<p>Audit attribution omitted.</p>

<p>... edits are assumed trusted.</p>

<br>

<button class="choice" id="proceedBtn">
Proceed to Access Logs
</button>
</div>`;

    document
      .getElementById("proceedBtn")
      .addEventListener("click", () => {
        window.location.href =
          "https://sanvisharma850.github.io/access-logs/logs.html";
      });
  }
}

/* =======================
   DEVTOOLS TRAP
======================= */
let devtoolsOpen = false;

setInterval(() => {
  const t = performance.now();
  debugger;
  if (performance.now() - t > 100 && !devtoolsOpen) {
    devtoolsOpen = true;
    console.clear();
    console.error("Unauthorized inspection detected.");
    console.info(
      "You won’t find the killer in the arguments.\nYou’ll find them in the assumptions."
    );
  }
}, 1000);
