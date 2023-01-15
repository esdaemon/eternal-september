export default function bar() {
  let span = document.querySelectorAll(".bar");
  span.forEach((element) => {
    let char = element.dataset.char;
    let space = element.dataset.space;
    let n = element.dataset.n;
    let style = element.dataset.style;

    let result = "";
    let multispace = "&nbsp;".repeat(space)
    //.REPEAT() FUNCTION MAY NOT WORK ON INTERNET EXPLORER

    for (let i = 0; i < n; i++) {
      result = result + multispace + `<span style="${style}">${char}</span>`;
    }
    element.innerHTML = result;
  });
}

// example html: &emsp;<span class="bar" data-char="X" data-space="6" data-n="9" data-style="font-size:12px; font-family: 'Source Code Pro'"></span>
