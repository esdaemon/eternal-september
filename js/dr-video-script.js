import initWiki from "./initWiki.js";

// const mediaElement = document.querySelector("video");
let mediaElement;
const playPauseButton = document.querySelector(".play-pause");
const seekbar = document.querySelector(".seekbar");
const volumeBar = document.querySelector(".volume");

if (document.querySelector("video")) {
  mediaElement = document.querySelector("video");
} else if (document.querySelector("audio")) {
  mediaElement = document.querySelector("audio");
}

seekbar.value = 0;
volumeBar.value = 80;

let mediaState = {
  isReplay: false,
  isPaused: true,
};

mediaElement.addEventListener("canplay", setDuration);
playPauseButton.addEventListener("click", togglePlayPause);
mediaElement.addEventListener("timeupdate", setProgress);
mediaElement.addEventListener("ended", onEnd);
seekbar.addEventListener("input", onSeek);
volumeBar.addEventListener("input", onVolumeSeek);

if (document.querySelectorAll("[data-wiki]").length > 0) {
  initWiki();
  console.log(document.querySelectorAll("[data-wiki]").length);
}

// ▶︎▷‣▸▹►▻⌲
// ■□☐▪︎▫︎◻︎◼︎
// ⏦
function togglePlayPause() {
  if (mediaState.isPaused) {
    playPauseButton.innerHTML = "❒";
    mediaElement.play();
  } else {
    if (mediaState.isReplay) {
      // Replay
      playPauseButton.innerHTML = "❒";
      mediaElement.play();
      mediaState.isReplay = false;
      return;
    }
    playPauseButton.innerHTML = "▷";
    mediaElement.pause();
  }
  mediaState.isPaused = !mediaState.isPaused;
}

function setProgress() {
  seekbar.value = mediaElement.currentTime;
}
function setDuration() {
  seekbar.max = mediaElement.duration;
}

function onEnd() {
  playPauseButton.innerHTML = "▷";
  mediaElement.currentTime = 0;
  seekbar.value = 0;
  mediaState.isReplay = true;
}
function onSeek(evt) {
  mediaElement.currentTime = evt.target.value;
}

function onVolumeSeek(evt) {
  mediaElement.volume = evt.target.value / 100;
}
