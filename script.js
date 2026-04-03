const namespace = "siren-gift-unique";

fetch(`https://api.countapi.xyz/hit/${namespace}/visits`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("counter").innerText =
      `🌸 ${data.value} people have seen this`;
  });
