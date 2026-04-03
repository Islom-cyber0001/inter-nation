const video = document.getElementById("bg-video");
const music = document.getElementById("bg-music");
const playBtn = document.getElementById("playBtn");

// video doim ovozsiz
video.muted = true;

// loader tugagach content chiqadi
setTimeout(() => {
  document.getElementById("content").classList.remove("hidden");
}, 2000);

// play tugma
playBtn.addEventListener("click", () => {
  video.play();
  music.play();
  playBtn.style.display = "none";
});
