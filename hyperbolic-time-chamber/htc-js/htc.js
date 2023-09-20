import initWiki from "../../js/initWiki.js";

// TODO: add mouse movement debounce to make UI elements reappear instead of hover.
const next = document.querySelector(".next-button");
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
  "pink-twilight",
  "cold-slither",
  "into-the-turquoise",
  "helikopter-streichquartett",
  "the-march-of-the-archons",
  "thuban",
  "the-moon-matrix-saturns-hexagon",
  "a-lake-cimmerian",
  "mega-man-ii",
  "lost-woods",
  "ladder-scene",
];

function navToRndmNext() {
  const currentUrl = window.location.href;
  let newUrl = getRndmUrl();
  while (currentUrl === newUrl) {
    newUrl = getRndmUrl();
  }
  window.location.href = newUrl;
}
next.addEventListener("click", (e) => {
  navToRndmNext();
});

function getRndmUrl() {
  const rndmUrl = urlList.at(Math.floor(Math.random() * urlList.length));
  return window.location.href.replace(
    /(?<=hyperbolic-time-chamber\/).*$/,
    rndmUrl + ".html"
  );
}

const video = document.querySelector("video");
document.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    event.preventDefault();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    navToRndmNext();
    event.preventDefault();
  }
});
