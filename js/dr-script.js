import initWiki from "./initWiki.js";
import { ESAudioPlayer } from "./components/ESAudioPlayer.js";
import { ESVideoPlayer } from "./components/ESVideoPlayer.js";

if (document.querySelectorAll("[data-wiki]").length > 0) {
  initWiki();
  console.log(document.querySelectorAll("[data-wiki]").length);
}
customElements.define("es-audio", ESAudioPlayer);
customElements.define("es-video", ESVideoPlayer);
