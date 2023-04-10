const poems = [
  { url: "/chronic-mindcrimes/entries.html", title: "CLICK HERE TO START" }
];

console.log(document.URL.split("/chronic-mindcrimes")[1]);
class CMIndex extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    const url = document.URL.split("/chronic-mindcrimes/")[1];
    const indexHeader = document.createElement("strong");
    indexHeader.textContent = "INDEX:";
    ul.appendChild(indexHeader);

    poems.forEach((poem) => {
      const a = document.createElement("a");
      const li = document.createElement("li");
      a.href = poem.url;
      a.innerHTML = poem.title;
      if (url !== "" && poem.url.includes(url)) {
        a.classList = "current-poem";
      }
      li.appendChild(a);
      ul.appendChild(li);
    });

    div.appendChild(ul);

    const style = document.createElement("style");
    style.textContent = `div {
    margin: 0;
    padding: 10px;
    font-family: "Chicago", monospace;  
    border: 1px solid var(--lines);
    box-shadow: 5px 5px 0 -1px var(--sp-grey), 5px 5px var(--lines);
    background: rgb(209, 209, 209);
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    font-size: 10pt;
    padding: 5px 0;
  }
  a, a:visited {color: blue}
  a.current-poem {
    background-color: hotpink;
    color: black;
  }`;
    shadow.appendChild(div);
    shadow.append(style);
  }
}

customElements.define("cm-index", CMIndex);
