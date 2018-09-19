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

function kanjiTemplate(symbol){
  return `
<link rel="stylesheet" type="text/css" href="something.css" />
  <div class="kanji">
    <h2 class="kan-name">${symbol.kan} <span class="species">(${symbol.hira})</span> <span class="species">(${symbol.kata})</span>
</h2>
  <p class="meaning"><strong>Meaning:</strong> ${symbol.meaning}</p>
  </div>
  `
}
document.getElementById("data").innerHTML = `
      <link rel="stylesheet" type="text/css" href="something.css" />
<h1 class="data-title">Kanji (${kanjiData.length})results<h1>
${kanjiData.map(kanjiTemplate).join('')}
<p class="footer">These ${kanjiData.length} kanji were added recently. Check back soon for updates. UwU</p>
`
