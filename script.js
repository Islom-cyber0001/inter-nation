// Elementni olish
const counterEl = document.getElementById("counter");

// Cloudflare Worker URL
const WORKER_URL = "https://inter-nation.islomodilov573.workers.dev";

// Fetch orqali unique visitors olish
fetch(WORKER_URL)
  .then(res => res.json())
  .then(data => {
    // Sahifada counterni ko'rsatish
    if(counterEl) {
      counterEl.innerText = `🌸 ${data.value} unique visitors`;
    }
  })
  .catch(err => {
    if(counterEl) counterEl.innerText = "Error loading counter";
    console.error("Counter fetch error:", err);
  });

// --- Video va Music play tugmasi (agar ishlatmoqchi bo'lsang) ---
const video = document.getElementById("bg-video");
const music = document.getElementById("bg-music");
const playBtn = document.getElementById("playBtn");

if(playBtn) {
  playBtn.addEventListener("click", () => {
    video.muted = false; // video ovozini yoqish
    video.play();
    if(music) music.play();
    playBtn.style.display = "none"; // tugmani yashirish
  });
}
