export function generateErrorWiki() {
  let glitches = [
    "█",
    "█",
    "█",
    "█",
    "A̸̢̰̣̎̍͝",
    "B̷̨̧̦͇̖̫̀̅̃̽́",
    "C̷̛̝̞̼͙̞̗̱̈͂̈́̒̒̄",
    "D̶̹̣͍̅̂̾̈̑͝",
    "E̸͈̮̱͒̒̽͋̏",
    "F̴̩͈̒̊͋́͘͜͝",
    "G̴̜̦̬̀̉́̋",
    "H̷͔̥̙͎̰̜͒",
    "Į̶̝͙̺̤̩̗́̐͝",
    "Ĵ̸̢̭̮͒̅͛̈͋͝",
    "K̵̳͌́̈́̎̓̆͝",
    "L̶̬̥͚͗͊͜͠",
    "M̵̼̦͈͎͙̞̓̾",
    "Ń̴̮͇̓̇̆̕",
    "O̸̢̬͗̑͘",
    "P̴̮̯͕̮͂͜",
    "Q̷̯̘̌͋͑̋̊̎͝",
    "R̸̨̥̮̖̿̓̽̕̕",
    "Ș̸̞͚̜͉̕",
    "T̷̡̛̳̼͔̜̮̤͛͝͠",
    "U̸͖͖͖͛͊͝",
    "V̸̨̫̲͍̌̔́̾͂͝͝",
    "W̶̛͍̝͉͜",
    "X̸̛̤͇̬̜̲̜̿͗̓́̊̽",
    "Ý̸̨̦̲̘̤̖̎́",
    "Z̶̞̙͎̭͇̻͕̅́͋̄̔",
    "ạ̵̻̇́̈́̔̅̏͝",
    "b̴̭̯͈̣̹͎̽̏͗̑͆̄̎",
    "c̶̟͈̦̬͓̤̭̏",
    "d̶̰̍̑",
    "ẻ̴̡͇̖̱̻̺̇͛͒͜͠͝",
    "f̸̱̟̏̌͌̍̌́͘",
    "g̷̰̠̒͛̇̚",
    "ḧ̴̘͉́͌̿̐̈",
    "i̷̱̜͕͙͍̠̒̏ͅ",
    "j̴̝̻̬̩͉͔͑̈̆̓̊̓̓͜",
    "k̸̤̖̗̠̯̖̠̐̂",
    "l̸̛͖̮̥͚̫͓̃͒̐͋̈",
    "m̷͙͎͎̲̩͊̃",
    "ǹ̵̛̍͌̑ͅ",
    "o̵̖̪̣͕̜̘̅̓̕",
    "p̷̜̾͊",
    "q̵̡̹̪̲̱̽͗̓",
    "r̶̜͓̰̭̃̔͂̔",
    "s̸̢̰͕̪̰̪̒͊̊͒",
    "t̵̡̩̞̥̫͎̝̋͆͑̌̌̊",
    "u̵̡̱̞͈̖̲̦̽̚",
    "v̶̢͕̬͔͎̞̖͝",
    "ẘ̶͈̅͠",
    "x̷̭̮̹̲͙̀́̽̉̋̕͜͝",
    "y̴̢͕̥̹̝̍̔̓̏͜͝͠",
    "z̷̗̦͓̝̺̞͆̾̎͂͗̆̚",
    " ",
    ". ",
    "?",
  ];
  let redacteds = [
    "███████ ██████ ███████████████ █████████████ ███████████.",
    "███████████████████ ████████████████ ██████████████████ ████████████████.",
    "████████ █████████████████ ████████ █████ ████████:",
    "█████████████████ ████████ ███████ ██████ ███████████████ ███████ ███████████ ███████████.",
    "███████████████████████ ████████████ ██████████████████ ████████████████.",
    "████████ █████████████████ ████████ █████ ████████ █████████████████ ████████?",
  ];

  function getGlitch(x) {
    let arr = [];
    for (let i = 0; i < Math.random() * x + 10; i++) {
      arr.push(glitches[Math.floor(Math.random() * glitches.length)]);
    }
    return arr.join("").toString();
  }

  function getRedacted() {
    let arr = [];
    for (let i = 0; i < Math.random() * 4 + 1; i++) {
      arr.push(redacteds[Math.floor(Math.random() * redacteds.length)]);
    }
    return arr.join(" ").toString();
  }

  function randomAlign() {
    let rndm = Math.random();
    console.log(rndm);
    if (rndm > 0.8) {
      return "right";
    } else if (rndm > 0.4) {
      return "center";
    } else return "left";
  }

  let errorHtml = `<p>█████ <strong>REDACTEḐ̶̧̪͉̬͍̄͒͂̅͜</strong> ████<br></p><p>${getRedacted()}<br /><p style="text-align: ${randomAlign()};" class="glitch">${getGlitch(
    20
  )}</p><br /> ${getRedacted()}</p><p> ${getRedacted()}</p><p style="text-align: ${randomAlign()};" class="glitch">${
    Math.random() > 0.5 ? "" : getGlitch(10)
  }</p><p> ${Math.random() > 0.5 ? "" : getRedacted()}</p>`;
  return errorHtml;
}
