const next = document.querySelector(".next-button");
const fades = document.querySelectorAll(".fade");
const urlList = [
  "pokemon-shock",
  "strange-turquoise-rotation",
  "spiderwalk-with-me",
  "hejira-in-ligar",
  "porsche-starship",
  "judgement-day-in-sofitel",
  "segal-in-dreamland",
  "love-bytes",
  "white-cube-o-death",
  "solitaire",
];
next.addEventListener("click", (e) => {
  const currentUrl = window.location.href;
  let newUrl = getRndmUrl();
  while (currentUrl === newUrl) {
    newUrl = getRndmUrl();
  }
  window.location.href = newUrl;
});

function getRndmUrl() {
  const rndmUrl = urlList.at(Math.floor(Math.random() * urlList.length));
  return window.location.href.replace(
    /(?<=hyperbolic-time-chamber\/).*$/,
    rndmUrl + ".html"
  );
}

// const timer = setTimeout(() => {
//   next.classList.remove("next-button");
// }, 2000);
