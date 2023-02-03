export default function bar() {
  let span = document.querySelectorAll(".bar");
  span.forEach((element) => {
    let char = element.dataset.char;
    let space = element.dataset.space;
    let n = element.dataset.n;
    let style = element.dataset.style;

    let result = "";
    //.REPEAT() FUNCTION MAY NOT WORK ON INTERNET EXPLORER

    for (let i = 0; i < n; i++) {
      let multispace = (i===0 ? '' : "&nbsp;".repeat(space))
      result = result + multispace + `${char}`;
    }
    element.innerHTML = result;
  });
}

// example html: <span style="font-size:13.5px; font-family: 'Source Code Pro'" class="bar pointfive" data-char="X" data-space="5" data-n="9"></span><br>
