export class ESVideoPlayer extends HTMLElement {
  constructor() {
    super();
    const src = this.getAttribute("src");

    const shadow = this.attachShadow({ mode: "open" });

    const container = document.createElement("div");
    container.classList = "container";
    const video = document.createElement("video");
    video.setAttribute("src", src);

    const controls = document.createElement("div");
    controls.classList = "controls";

    const playPause = document.createElement("button");
    playPause.textContent = "▷";
    controls.appendChild(playPause);

    const seekbar = document.createElement("input");
    seekbar.type = "range";
    controls.appendChild(seekbar);

    const volumeIcon = document.createElement("span");
    volumeIcon.textContent = "⏦";
    controls.appendChild(volumeIcon);

    const volume = document.createElement("input");
    volume.type = "range";
    volume.title = "volume";
    controls.appendChild(volume);

    container.appendChild(video);
    container.appendChild(controls);

    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "/js/components/player.css");

    shadow.appendChild(container);
    shadow.append(linkElem);

    //video player stuff
    let videoState = {
      isReplay: false,
      isPaused: true,
    };
    video.addEventListener("canplay", setDuration);
    playPause.addEventListener("click", togglePlayPause);
    video.addEventListener("timeupdate", setProgress);
    video.addEventListener("ended", onEnd);
    seekbar.addEventListener("input", onSeek);
    volume.addEventListener("input", onVolumeSeek);

    function togglePlayPause() {
      if (videoState.isPaused) {
        playPause.innerHTML = "❒";
        video.play();
      } else {
        if (videoState.isReplay) {
          // Replay
          playPause.innerHTML = "❒";
          video.play();
          videoState.isReplay = false;
          return;
        }
        playPause.innerHTML = "▷";
        video.pause();
      }
      videoState.isPaused = !videoState.isPaused;
    }

    function setProgress() {
      seekbar.value = video.currentTime;
    }
    function setDuration() {
      seekbar.max = video.duration;
    }

    function onEnd() {
      playPause.innerHTML = "▷";
      video.currentTime = 0;
      seekbar.value = 0;
      videoState.isReplay = true;
    }
    function onSeek(evt) {
      video.currentTime = evt.target.value;
    }

    function onVolumeSeek(evt) {
      video.volume = evt.target.value / 100;
    }
  }
}
