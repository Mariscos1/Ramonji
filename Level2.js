const leveltwo = [
  {
      kan: "一",
      roma: "Ichi",
      hira: "ひと-, ひと",
      kata: "イチ, イツ",
      meaning: "one"
  },
  {
      kan: "二",
      roma: "Ni",
      hira:"に",
      kata: "ニ",
      meaning: "two"
  }
  
  ];

function kanjiTemplate(symbol){
  return `
<link rel="stylesheet" type="text/css" href="something.css" />
  <div class="kanji">
    <h2 class="kan-name">${symbol.kan}<span class="words">(${symbol.roma}), <span class="species">(${symbol.hira})</span> <span class="species">(${symbol.kata})</span>
</h2>
  <p class="meaning"><strong>Meaning:</strong> ${symbol.meaning}</p>
  </div>
  `
}
document.getElementById("displaytwo").innerHTML = `
      <link rel="stylesheet" type="text/css" href="something.css" />
<style>
  body{
  background-color: #FED9D9;
}
</style>
<body>
<h1 class="data-title" style="background-color: #F74E51;margin:0;border:0"><a href="index.html" title="Title">Kanji (${leveltwo.length}) Results</a><h1>
${leveltwo.map(kanjiTemplate).join('')}
<p class="footer">These ${leveltwo.length} kanji were added recently. Check back soon for updates. UwU</p>
</body>
`
