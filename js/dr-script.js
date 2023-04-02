import initWiki from "./initWiki.js";

if (document.querySelectorAll("[data-wiki]").length > 0) {
  initWiki();
  console.log(document.querySelectorAll("[data-wiki]").length);
}
