let next = document.querySelector(".next-button");
let urlList = [
  "pokemon-shock",
  "home",
  "strange-turquoise-rotation",
  "spiderwalk-with-me",
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
