const leveltwo = [
  {
      kan: "医",
      roma: "I",
      hira: "い",
      kata: "イ",
      meaning: "medicine, doctor, medical"
  },
  {
      kan: "不",
      roma: "Fu",
      hira:"ふ",
      kata: "フ",
      meaning: "Not, non-"
  },
  {
      kan: "女",
      roma: "Onna",
      hira:"おんあ",
      kata: "オンア",
      meaning: "Woman"
  },
  {
      kan: "主",
      roma: "Omo",
      hira:"おも",
      kata: "オンア",
      meaning: "Main, Leader, Chief"
  },
  {
      kan: "区",
      roma: "Ku",
      hira:"く",
      kata: "ク",
      meaning: "Ward, district"
  },
  {
      kan: "能",
      roma: "No",
      hira:"のお",
      kata: "ノオ",
      meaning: "ability, skill"
  },
  {
      kan: "質",
      roma: "Shitsu",
      hira:"しつ",
      kata: "シツ",
      meaning: "quality, substance, matter"
  },
  {
      kan: "思",
      roma: "Shitau",
      hira:"したう",
      kata: "シタウ",
      meaning: "think, thought"
  },
  {
      kan: "者",
      roma: "Mono",
      hira:"もの",
      kata: "モノ",
      meaning: "person, a person"
  },
  {
      kan: "英",
      roma: "Ei",
      hira:"えい",
      kata: "エイ",
      meaning: "English"
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
