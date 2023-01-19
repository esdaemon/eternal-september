// TODO fix wiki not appearing where it should when page is long
// make wiki not visible if user scrolls it out of view
// generate more fun error wiki programmatically

export default function initWiki() {
  //insert modal
  // add << to "prev" button
  document.body.insertAdjacentHTML(
    "beforeend",
    `<div class="wiki">
      <div class="handle"><span class="close">𝕏</span></div>
      <div class="not-handle">
        <div class="entry"></div>
        <button class="prev">&lt;&lt;previous entry</button>
      </div>
    </div>`
  );

  const wiki = document.querySelector(".wiki");
  const wikiClose = document.querySelector(".close");
  const handle = document.querySelector(".handle");
  const entry = document.querySelector(".entry");
  const prev = document.querySelector(".prev");

  const wikiLinks = document.querySelectorAll("[data-wiki]");

  let entryArray = [];

  // add event listener to previous entry button
  prev.addEventListener("click", () => {
    entryArray.pop();
    wikiOpen(entryArray[entryArray.length - 1]);
    if (entryArray.length < 2) {
      prev.style.visibility = "hidden";
    }
  });

  // increment entry
  function incEntry(entryID) {
    if (entryID == entryArray[entryArray.length - 1]) {
      return;
    }
    entryArray = [...entryArray, entryID];
    if (entryArray.length > 1) {
      prev.style.visibility = "visible";
    }
  }

  function lynkClick(e) {
    wikiOpen(e.target.dataset.wiki, e.clientY, e.clientX);
    incEntry(e.target.dataset.wiki);
    // e.target.style.top = "25%";
    // e.target.style.left = "65%";
  }

  wikiLinks.forEach((lynk) =>
    lynk.addEventListener("click", (e) => lynkClick(e))
  );

  // When the user clicks the button, open the wiki
  async function wikiOpen(entryID, mousey, mousex) {
    //TODO -- add conditional that does something clever before trying to fetch if there is no entry in /entry

    let response = await fetch(`/wiki/${entryID}.html`);
    let txt = await response.text();

    let errorResponse = await fetch("/wiki/error.html");
    let errorTxt = await errorResponse.text();
    // let errorTxt = function generateErrorWiki() {
    //   // TODO: make this return redacted wiki
    //   let errorHtml = ''
    //   return errorHtml;
    // }
    // show "error" wiki if lynk is wrong
    txt.includes("Cannot GET /wiki/")
      ? (entry.innerHTML = errorTxt)
      : (entry.innerHTML = txt);

    // adjust location based on click xy to avoid content leaving window
    if (wiki.style.visibility !== "visible") {
      // horizontal stuff
      mousex > window.innerWidth - wiki.clientWidth
        ? (wiki.style.left = mousex - wiki.clientWidth / 2 + "px")
        : (wiki.style.left = mousex + "px");
      // vertical stuff
      if (mousey - wiki.clientHeight < 0) {
        wiki.style.top = 0;
      } else if (mousey + wiki.clientHeight > window.innerHeight) {
        wiki.style.top = window.innerHeight - wiki.clientHeight - 20 + "px";
      } else {
        wiki.style.top = mousey - wiki.clientHeight / 2 + "px";
      }
    }

    let innerWikiLinks = entry.querySelectorAll("[data-wiki]");
    innerWikiLinks.forEach((link) =>
      link.addEventListener("click", (e) => lynkClick(e))
    );
    wiki.style.visibility = "visible";
  }

  // When the user clicks on <wikiClose> (x), close the wiki
  wikiClose.onclick = (e) => {
    wiki.style.visibility = "hidden";
    prev.style.visibility = "hidden";
    entryArray = [];
  };

  dragElement(wiki);

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    handle.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}
