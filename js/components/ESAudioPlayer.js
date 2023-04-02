const traxList = [
  {
    title: "Into The Turquoise",
    src: "https://prismic-io.s3.amazonaws.com/eternal-september/e6cb697e-cbd1-4362-9554-264022e4daa6_IntoTheTurquoise.mp3",
  },
  {
    title: "Metal Swans",
    src: "https://prismic-io.s3.amazonaws.com/eternal-september/a306e4e6-2722-4d07-a7f4-aef736553743_MetalSwans32.mp3",
  },
  {
    title: "Knight Ridder",
    src: "https://prismic-io.s3.amazonaws.com/eternal-september/6899447f-0777-4dfd-95fe-88dc8841282b_KnightRidder8.mp3",
  },
];

class ESAudioPlayer extends HTMLElement {
  constructor() {
    super();
    const src = this.getAttribute("src");
    const shadow = this.attachShadow({ mode: "open" });

    const container = document.createElement("div");
    container.classList = "container";
    const audio = document.createElement("audio");
    let currentlyPlaying = 0;
    audio.setAttribute("src", traxList[0].src);

    const controls = document.createElement("div");
    controls.classList = "controls audio-controls";

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

    const trax = document.createElement("div");
    trax.classList = "trax";
    const playlist = document.createElement("ul");
    traxList.forEach((track, i) => {
      const li = document.createElement("li");
      li.textContent = track.title;
      li.dataset.trackNumber = i;
      li.addEventListener("click", (e) => {
        let clickedTrackNumber = e.target.dataset.trackNumber;
        let previousTrack = document.querySelectorAll(".currently-playing");
        if (previousTrack) {
          console.log(previousTrack);
          // previousTrack.forEach((e) => {
          //   e.classList.remove("currently-playing");
          // });
        }
        li.classList = "currently-playing";
        currentlyPlaying = clickedTrackNumber;
        audio.currentTime = 0;
        audio.setAttribute("src", traxList[clickedTrackNumber].src);
        togglePlayPause();
      });
      if (i === currentlyPlaying) {
        li.classList = "currently-playing";
      }
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

    function onVolumeSeek(evt) {
      audio.volume = evt.target.value / 100;
    }
  }
}

customElements.define("es-audio", ESAudioPlayer);
