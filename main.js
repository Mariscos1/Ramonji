<link rel="stylesheet" type="text/css" href="something.css" />
const kanjiData = [
  {
    kan: "hello",
    meaning: "die"
  },
  {
    kan: "goodbye",
    meaning: "i don't know"
  }
  ];
document.getElementById("data").innerHTML = `
<h1 class="data-title">Kanji (${kanjiData.length})results<h1>
`

