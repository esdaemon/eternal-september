//draw across variables
let ww = window.innerWidth;
let dashes, slashes, periods, infinity;

export class drawAcrossClass {
  constructor(cls, chr, scl) {
    this.cls = document.getElementsByClassName(cls);
    this.chr = chr;
    this.scl = scl;
  }
  doTheDraw() {
    for (let i = 0; i < this.cls.length; i++) {
      this.cls[i].textContent = this.drawStr(this.chr, this.scl);
    }
  }
  drawStr(x, y) {
    let s = "";
    for (let i = 0; i < ww / y - 5; i++) {
      s += x;
    }
    return s;
  }
}

// draw across
// should be used in Phantom City, O.D. on Vaporwave, Aping the Eucharist, Without Chasms
export default function windowResized() {
  ww = window.innerWidth;

  // find line break classes then draw across w/ characters and scale
  // new version using class
  slashes = new drawAcrossClass("slashes", "/", 7);
  dashes = new drawAcrossClass("dashes", "—", 17.5);
  periods = new drawAcrossClass("periods", ".", 5);
  infinity = new drawAcrossClass("infinity", "∞", 13);
  slashes.doTheDraw();
  dashes.doTheDraw();
  periods.doTheDraw();
  infinity.doTheDraw();
}
