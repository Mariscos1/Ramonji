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
<link rel="stylesheet" type="text/css" href="something.css" />
<h1 class="data-title">Kanji (${kanjiData.length})results<h1>
${kanjiData.map(function(symbol){
  return symbol.kan
}).join(' ')}
<p class="footer">These ${kanjiData.length} kanji were added recently. Check back soon for updates. UwU</p>
`

