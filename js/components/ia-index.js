const poems = [
  { url: "./thor-vs-ragnarok.html", title: "Thor vs. Ragnarök" },
  { url: "./bland-axiom.html", title: "Bland Axiom" },
  { url: "./wisconsin-yr-so-brutalist.html", title: "Wisconsin, Yr So Brutalist" },
  { url: "./metal-swans-in-rain.html", title: "Metal Swans in Rain" },
  { url: "./bitcoin-otherworld.html", title: "BitCoin™ <em>Otherworld</em>" },
  { url: "./neon-genesis-evangelion.html", title: "<em>Neon Genesis Evangelion</em> (Post-Vasectomy)" },
  { url: "./rammellzee.html", title: "RAMM:ΣLL:ZΣΣ & K-Rob in Circuit City Parking Lot" },
  { url: "./the-grimore-of-solomon.html", title: "The Grimoire of Solomon" },
  { url: "./he-man-and-the-masters-of-the-universe.html", title: "He-Man and the Masters of the Universe (Episode 83:<em>Into the Abyss</em>)" },
  { url: "./the-masters-of-deception.html", title: "The Masters of Deception" },
  { url: "./virtual-sword-of-damocles.html", title: "Virtual Sword Of Damocles" },
  { url: "./ghost-hieroglyphs.html", title: "Ghost Hieroglyphs" },
  { url: "./zen-rubric-ambien-rain.html", title: "Zen Rubric/<em>Ambien Rain</em>" },
  { url: "./cimmerian-winamp.html", title: "Cimmerian WinAmp™" },
  { url: "./dmc-oblivion.html", title: "DMC Oblivion" },
  { url: "./solemn-simulacrum.html", title: "Solemn Simulacrum*" },
  {
    url: "./you-dont-know-br.html",
    title: "You Don't Know <em>Blade Runner</em> Like I Know <em>Blade Runner</em>",
  },
  { url: "./house-of-destro.html", title: "House of Destro <span class='footnote'>or</span> Goodnight, My Baroness" },
  { url: "./flamingoes-in-the-mall-fountain.html", title: "Flamingoes in the Mall Fountain" },
  { url: "./another-day-in-my-hatra.html", title: "Another Day in My Hatra" },
  { url: "./running-cola-is-africa.html", title: "Running Cola is Africa" }
];

console.log(document.URL.split("/spectral-peaks")[1]);
class IAIndex extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    const url = document.URL.split("/i-antichrist/")[1];
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
    box-shadow: 5px 5px 0 -1px rgb(0,0,63), 5px 5px var(--lines);
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
    background-color: rgb(195, 0, 39);
    color: black;
  }`;
    shadow.appendChild(div);
    shadow.append(style);
  }
}

customElements.define("ia-index", IAIndex);
