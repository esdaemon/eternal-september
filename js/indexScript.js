let metali, olTypes;
let rdmStyleTimer = setInterval(swapOlStyle, 400);
window.onLoad = setup();

// let rdmStyleTimer = setInterval(swapOlStyle(), 1000);

function setup() {
  olTypes = [
    "armenian",
    "cjk-ideographic",
    "georgian",
    "hebrew",
    "hiragana",
    "hiragana-iroha",
    "katakana",
    "katakana-iroha",
    "lower-greek",
    "upper-roman",
  ];
  metali = document.querySelectorAll(".meta-index li");
  for (let i = 0; i < metali.length; i++) {
    rdmli(i);
  }
  swapOlStyle();
}

function swapOlStyle() {
  let rdm = Math.floor(Math.random() * metali.length);
  rdmli(rdm);
}
function rdmFromArr(arr) {
  let x = arr[Math.floor(Math.random() * olTypes.length)];
  return x;
}
function rdmli(i) {
  metali[i].style.listStyleType = rdmFromArr(olTypes);
}
