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
<h1 class="data-title" style="text-align:center;background-color: #F74E51; margin:0;">Kanji(${kanjiData.length}) results<h1>
`
