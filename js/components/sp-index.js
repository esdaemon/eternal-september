const poems = [
  { url: "./silver-walls.html", title: "Silver Walls" },
  { url: "./phantom-city.html", title: "Phantom City" },
  { url: "./od-on-vaporwave.html", title: "O.D. on Vaporwave" },
  { url: "./beautiful-dreamer.html", title: "Beautiful Dreamer" },
  { url: "./asphodel-meadows.html", title: "Asphodel Meadows" },
  { url: "./delorean-days.html", title: "DeLorean Days" },
  { url: "./in-america.html", title: "In America" },
  { url: "./i-love-you-chris-marker.html", title: "I Love You Chris Marker" },
  { url: "./commando-in-syntax.html", title: "Commando in Syntax" },
  { url: "./i-heart-ice.html", title: "i . heart . ice" },
  { url: "./cygnet-of-orient.html", title: "Cygnet of Orient" },
  { url: "./normcore.html", title: "NormCore™" },
  { url: "./tikrit-imagined.html", title: "Tikrit, Imagined" },
  { url: "./poison-the-daylight.html", title: "Poison the Daylight" },
  { url: "./god-of-condo.html", title: "GOD OF CONDO" },
  { url: "./dillinger-is-dead.html", title: "Dillinger is Dead" },
  {
    url: "./love-theme-from-stalker.html",
    title: '"Love Theme" from <em>Stalker</em>',
  },
  { url: "./aping-the-eucharist.html", title: "Aping the Eucharist" },
  { url: "./predator-at-bay.html", title: "Predator at Bay" },
  { url: "./altered-id.html", title: "Altered Id" },
  { url: "./codex.html", title: "###CODEX###" },
  { url: "./necropolis.html", title: "Necropolis" },
  { url: "./hadean-lands.html", title: "Hadean Lands" },
  { url: "./burgundy-fairchild.html", title: "Burgundy Fairchild" },
  { url: "./pantheon-of-dust.html", title: "Pantheon of Dust" },
  { url: "./without-chasms.html", title: "Without Chasms " },
  { url: "./future-crime.html", title: "Future Crime" },
  { url: "./the-clairvoyant.html", title: "The Clairvoyant " },
  {
    url: "./from-the-white-moon-of-solaris-the-pinkish-sentient-ocean.html",
    title: "From the White Moon of Solaris, the Pinkish Sentient Ocean",
  },
  { url: "./spectral-peaks.html", title: "Spectral Peaks" },
];

console.log(document.URL.split("/spectral-peaks")[1]);
class SPIndex extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    const url = document.URL.split("/spectral-peaks/")[1];
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
      } else if (url === "" && poem.url.includes("asphodel")) {
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
    padding: 2px 3px;
  }`;
    shadow.appendChild(div);
    shadow.append(style);
  }
}

customElements.define("sp-index", SPIndex);
