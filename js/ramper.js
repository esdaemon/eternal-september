export default function ramper() {
  let span = document.querySelectorAll(".ramper");
  span.forEach((element) => {
    let char = element.dataset.char;
    let init = element.dataset.init;
    let n = element.dataset.n;
    let mult = element.dataset.mult;
    let ascend = element.dataset.ascend === "false";

    let result = "";
    for (let i = 0; i < n; i++) {
      // go up if ascend = true;
      if (ascend) {
        result = result + `<span style="font-size: ${init}pt;">${char}</span>`;
      } else {
        result = `<span style="font-size: ${init}pt;">${char}</span>` + result;
      }
      init *= mult;
    }
    element.innerHTML = result;
  });
}

// example html: <span class="ramper" data-char=":)" data-init="30" data-n="10" data-mult=".85" data-ascend="true"></span>
