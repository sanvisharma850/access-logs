const correct = "140278";
let input = "";

document.querySelectorAll(".keypad button").forEach(btn => {
  btn.addEventListener("click", () => {
    input += btn.dataset.n;
    updateDots();

    if (input.length === 6) {
      if (input === correct) {
        window.location.href = "unlocked.html";
      } else {
        document.getElementById("error").innerText = "Incorrect Passcode";
        input = "";
        updateDots();
      }
    }
  });
});

function updateDots() {
  const dots = document.querySelector(".dots");
  dots.textContent = "● ".repeat(input.length).padEnd(12, "○ ");
}



function openApp(app) {
  const view = document.getElementById("appView");

  if (app === "notes") {
  view.textContent = `
If something happens to me:

Do not trust emotions.
Do not trust proximity.
Do not trust conversations.

Check GitHub Issues.
Check commit timing.
Check what was deleted.

People panic.
Systems hesitate.
`;
}

  if (app === "chat") {
  view.textContent = `
[23:47]
You said this was temporary.

[23:49]
You’re selling access.

[23:52]
If this gets out, you’re finished.

[typing…]
[typing stopped]

[Seen 00:01]
`;
}


  if (app === "calls") {
  view.textContent = `
INCOMING
12:58 AM — KUNAL VERMA

MISSED
12:41 AM — CAMPUS EXT

OUTGOING
00:12 AM — KUNAL

Duration: 02:31

Notes auto-saved.
`;
}

  if (app === "gallery") {
  view.innerHTML = `
<img src="assets/images/ip_crop.png">
Saved: 01:03 AM

Resolution: 143×88
Source: SCREENSHOT (MANUAL)

Metadata stripped.
`;
}

}
