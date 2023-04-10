import { allTrax } from "/static/audio/allTrax.js";

export class ESAudioPlayer extends HTMLElement {
  constructor() {
    super();
    const src = this.getAttribute("src");
    const shadow = this.attachShadow({ mode: "open" });

    const container = document.createElement("div");
    container.classList = "container";
    const audio = document.createElement("audio");
    let currentlyPlaying = 0;
    let traxList = allTrax[src];
    audio.setAttribute("src", traxList[currentlyPlaying].src);

    const controls = document.createElement("div");
    controls.classList = "controls audio-controls";

    const playPause = document.createElement("button");
    playPause.textContent = "▷";
    playPause.classList = "play-pause";
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
    volume.value = 90;
    controls.appendChild(volume);

    const trax = document.createElement("div");
    trax.classList = "trax";
    const playlist = document.createElement("ol");
    traxList.forEach((track, i) => {
      const li = document.createElement("li");
      li.textContent = track.title;
      li.dataset.trackNumber = i;
      if (i == 0) {
        li.classList.add("currently-playing");
      }
      li.addEventListener("click", (e) => {
        const clickedTrackNumber = e.target.dataset.trackNumber;
        const allTracks = this.shadowRoot.querySelectorAll("li");
        allTracks.forEach((t) => t.classList.remove("currently-playing"));
        e.target.classList.add("currently-playing");
        if (!audioState.isPaused) {
          togglePlayPause();
          audio.currentTime = 0;
          audio.setAttribute("src", traxList[clickedTrackNumber].src);
          togglePlayPause();
        } else {
          audio.currentTime = 0;
          audio.setAttribute("src", traxList[clickedTrackNumber].src);
        }
      });
      playlist.appendChild(li);
    });
    trax.appendChild(playlist);

    container.appendChild(audio);
    container.appendChild(controls);
    container.appendChild(trax);

    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "/js/components/audio-player.css");

    shadow.appendChild(container);
    shadow.append(linkElem);

    //player stuff
    let audioState = {
      isReplay: false,
      isPaused: true,
    };
    audio.addEventListener("canplay", setDuration);
    playPause.addEventListener("click", togglePlayPause);
    audio.addEventListener("timeupdate", setProgress);
    audio.addEventListener("ended", onEnd);
    seekbar.addEventListener("input", onSeek);
    volume.addEventListener("input", onVolumeSeek);

    function togglePlayPause() {
      if (audioState.isPaused) {
        playPause.innerHTML = "❒";
        audio.play();
      } else {
        if (audioState.isReplay) {
          // Replay
          playPause.innerHTML = "❒";
          audio.play();
          audioState.isReplay = false;
          return;
        }
        playPause.innerHTML = "▷";
        audio.pause();
      }
      audioState.isPaused = !audioState.isPaused;
    }

    function setProgress() {
      seekbar.value = audio.currentTime;
    }
    function setDuration() {
      seekbar.max = audio.duration;
    }

    function onEnd() {
      playPause.innerHTML = "▷";
      audio.currentTime = 0;
      seekbar.value = 0;
      audioState.isReplay = true;
    }
    function onSeek(evt) {
      audio.currentTime = evt.target.value;
    }

    function onVolumeSeek(e) {
      audio.volume = e.target.value / 100;
    }
  }
}
