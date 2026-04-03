// Counter
const namespace = "siren-gift-global";

fetch(`https://api.countapi.xyz/hit/${namespace}/visits`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("counter").innerText =
      `🌸 ${data.value} people have seen this`;
  });

// Name personalization
const params = new URLSearchParams(window.location.search);
const name = params.get("name");
if (name) {
  document.getElementById("title").innerText =
    `This is for you, ${name} 💜`;
}

// Play button
const video = document.getElementById("bg-video");
const music = document.getElementById("bg-music");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
  video.muted = false; // video ovozini yoqish
  video.play();
  music.play();
  playBtn.style.display = "none"; // tugmani yashirish
});
