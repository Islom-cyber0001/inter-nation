const video = document.getElementById("bg-video");
const music = document.getElementById("bg-music");
const playBtn = document.getElementById("playBtn");

// HAR DOIM video ovozsiz bo‘lsin
video.muted = true;

playBtn.addEventListener("click", () => {
  // video ketadi (ovozsiz)
  video.play();

  // faqat bitta audio ishlaydi
  if (music) {
    music.currentTime = 0;
    music.play();
  }

  // tugmani yashiramiz
  playBtn.style.display = "none";
});
