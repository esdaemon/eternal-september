import windowResized from "./drawAcross.js";
// import arrowSetup from "./drawArrow.js";
import initWiki from "./initWiki.js";
import wikiTester from "./wikiTester.js";
import ramper from "./ramper.js";
// modal variables

window.onLoad = setup();
window.addEventListener("resize", windowResized);

function setup() {
  // // draw arrows for asphodel meadows
  // arrowSetup();
  // draw accross
  windowResized();
  document.querySelector(".wiki-list") ? wikiTester() : null;

  if (document.querySelectorAll("[data-wiki]")) {
    initWiki();
    console.log(document.querySelectorAll("[data-wiki]").length);
  }

  document.querySelectorAll(".ramper") ? ramper() : null;
}
