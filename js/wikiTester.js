let wikiList = document.querySelector(".wiki-list"),
  li = document.createElement("li"),
  clone,
  //TODO -- make this dynamic
  allEntries = [
    "11B-X-1371",
    "23-enigma",
    "abercrombie",
    "advertising",
    "ai",
    "alban-berg",
    "alejandro-jodorowsky",
    "alien",
    "altered-states",
    "alters",
    "ambien",
    "andrei-tarkovsky",
    "anima",
    "anton-webern",
    "apeirophobia",
    "apocrypha",
    "archangel-michael",
    "arizona",
    "arnold-schwarzenegger",
    "asphodel-meadows",
    "atari",
    "baconator",
    "baudelaire",
    "berhold-brecht",
    "bicameralism",
    "bitcoin",
    "black-drop",
    "blade-runner",
    "bloomin-onion",
    "bowerbirds",
    "bruges",
    "brutalism",
    "burgundy-car-interior",
    "byrds-of-paradise",
    "cannabis",
    "cenobites",
    "chemtrails",
    "chernobyl",
    "chris-marker",
    "chrysanthemum",
    "cicadas",
    "cimmerian",
    "circuit-city",
    "code-x-digital",
    "codex",
    "codicil",
    "cold-slither",
    "colonel-john-matrix",
    "coltan",
    "contra",
    "copiale-cipher",
    "coral-gables",
    "cotton-mather",
    "crib-death",
    "crystal-pepsi",
    "cybernetics",
    "dactyls",
    "daemon",
    "dallas",
    "death-of-optimus",
    "deep-blue",
    "dekalog",
    "delorean",
    "destro",
    "dharma",
    "dialectic",
    "digital-riptide",
    "digital",
    "dillinger-is-dead",
    "division-bell",
    "doppler",
    "ehspf",
    "elektroshock-therapy",
    "elysium",
    "end-of-carthage",
    "enneagram",
    "enochian",
    "eraserhead",
    "error",
    "esd",
    "essential-oils",
    "et",
    "eternalblue",
    "eucharist",
    "event-horizon",
    "fleetwood-mac",
    "gallowglass",
    "gi-joe",
    "gowanus-canal",
    "gravitys-rainbow",
    "grey-waves",
    "hadean-lands",
    "hades",
    "hair-metal",
    "hatra",
    "he-man",
    "healthgoth",
    "helicopter-fetish",
    "hidden-level",
    "hysteria",
    "illuminati-quartet",
    "imago",
    "imbruglia",
    "immanuel-velikovsky",
    "incubus",
    "internet",
    "jan-michael-vincent",
    "jazzercise",
    "jon-and-kate",
    "joybubbles",
    "kareem-abdul-jabbar",
    "kinesiology",
    "klf",
    "knight-ridder",
    "knight-rider",
    "konami",
    "kosciuszko-bridge",
    "ladder-scene",
    "lawns",
    "legions-of-osiris",
    "lesser-key-of-solomon",
    "light-singing",
    "linguistics",
    "lord-digital",
    "los-angeles",
    "lost-woods",
    "luciferin",
    "lyric-suite",
    "marduk",
    "massed-vulture",
    "max-headroom",
    "mech",
    "meconium",
    "mega-man-2-video",
    "mega-man-2",
    "memorex",
    "metal-gear-solid",
    "metatron",
    "metroid",
    "michael-j-fox",
    "microsoft",
    "mindvox",
    "minotaur",
    "my-nepenthe",
    "narcotics",
    "neon-babylon",
    "neon-genesis-evangelion",
    "nes",
    "nettle",
    "ninel-kulagina",
    "no-wave",
    "noid",
    "nordgen",
    "normcore",
    "obelisk",
    "obolus",
    "octagon-of-dex",
    "operation-mindcrime",
    "operation-sundevil",
    "ophite-diagrams",
    "ornithomancy",
    "otherworld",
    "panopticon",
    "parallax",
    "paresthesia",
    "pazuzu",
    "perfect-strangers",
    "periaqueductal-grey",
    "phage",
    "phantom-archives",
    "phantom-city",
    "phiber-optik",
    "phreaking",
    "pokemon",
    "quantum-loop-gravity",
    "quantum",
    "radioshack",
    "rammellzee",
    "ramparts-magazine",
    "ringu",
    "robert-john-mutt-lange",
    "roger-bacon",
    "rorschach-test",
    "rose-pattern",
    "running-cola",
    "rygar",
    "saccharin",
    "saraya-sarhaddi-nelson",
    "schizophrenia",
    "sega",
    "septuagint",
    "simulation-theory",
    "skinemax",
    "skynet-syndrome",
    "snow-crash",
    "socotra",
    "solaris",
    "solomons-key",
    "spaceships-of-ezekiel",
    "spectre-complex",
    "stalker",
    "steven-bochco",
    "steven-seagal",
    "studs-terkel",
    "sword-of-damocles",
    "t-1-carrier",
    "technostalgia",
    "terminator",
    "tetra-denim",
    "the-baroness",
    "the-exorcist",
    "the-iceman-cometh",
    "the-moldau",
    "the-self",
    "the-waste-land",
    "the-woman-in-the-dunes",
    "thomas-kinkade",
    "tikrit",
    "tom-copter-fetish",
    "top-gun",
    "total-freedom",
    "tower-of-babel",
    "transformers",
    "tron",
    "true-hunger",
    "valhalla",
    "vaporwave",
    "venetian-pool",
    "venusian-enigmata",
    "videotex",
    "viduus",
    "viewtron",
    "voynich-manuscript",
    "vpd",
    "waves-of-nothingness",
    "weld-am-draht",
    "wiki-all",
    "william-gibson",
    "winamp",
    "wintermute",
    "zelda",
    "ziggurat",
  ];
export default function wikiTester() {
  allEntries.forEach((entry, index) => {
    clone = li.cloneNode();
    clone.innerHTML = `${index + 1}: <span data-wiki="${entry}">${entry}<span>`;
    wikiList.appendChild(clone);
  });
}
