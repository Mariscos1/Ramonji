const kanjiData = [
  {
      kan: "日",
      hira:"ひ, -び, -か",
      kata: "ニチ, ジツ",
      meaning: "day, sun, Japan, counter for days"
  },
  {
      kan: "一",
      hira: "ひと-, ひと",
      kata: "イチ, イツ",
      meaning: "one"
  },
  ];
document.getElementById("data").innerHTML = `
<link rel="stylesheet" type="text/css" href="something.css" />
<h1 class="data-title">Kanji (${kanjiData.length})results<h1>
${kanjiData.map(function(symbol){
  return symbol.kan
}).join(' ')}
<p class="footer">These ${kanjiData.length} kanji were added recently. Check back soon for updates. UwU</p>
`
