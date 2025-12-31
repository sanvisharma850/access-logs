

const btn = document.getElementById("reveal-btn");
const logBox = document.getElementById("log-box");

let reachedBottom = false;

logBox.addEventListener("scroll", () => {
  if (
    logBox.scrollTop + logBox.clientHeight >= logBox.scrollHeight - 5 &&
    !reachedBottom
  ) {
    reachedBottom = true;
    btn.innerText = "LOAD MORE LOGS";
  }
});
btn.classList.add("show");


btn.addEventListener("click", () => {
  // Full-screen corruption moment
  document.body.classList.add("glitch");

  const revealBtn = document.getElementById("reveal-btn");
const logBox = document.getElementById("log-box");
const riddle = document.getElementById("riddle");

revealBtn.addEventListener("click", () => {
  // Phase 1: Emergency blink
  document.body.classList.add("blink");

  // Phase 2: Start glitch after blink
  setTimeout(() => {
    document.body.classList.remove("blink");
    logBox.classList.add("glitch");
  }, 800); // blink duration

  // Phase 3: End glitch, reveal riddle
  setTimeout(() => {
    logBox.classList.remove("glitch");
    logBox.style.display = "none";
    riddle.classList.remove("hidden");
  }, 3000); // total meltdown time
});


  // Disable scrolling so it feels hijacked
  logBox.style.overflow = "hidden";
  btn.disabled = true;
  btn.innerText = "ACCESSING…";

  new Audio("static/alarm-glitch.mp3").play();

  setTimeout(() => {
    window.location.href = "riddle.html";
  }, 1200);
});
