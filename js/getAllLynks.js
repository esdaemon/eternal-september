function getAllLinks() {
  console.log("checking for links");
  const wikiLinks = document.querySelectorAll("[data-wiki]");

  let arr = [];
  wikiLinks.forEach((link) => {
    arr.push(link.dataset.wiki);
  });
  let uniqueWikiLinks = [...new Set(arr)].sort();

  console.log(uniqueWikiLinks);
}
getAllLinks();
