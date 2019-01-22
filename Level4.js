const levelfour = [
  {
      kan: "米",
      roma: "Amerika",
      hira: "あめりか",
      kata: "アメリカ",
      meaning: "Rice, USA"
  },
  {
      kan: "念",
      roma: "Nen",
      hira: "ねん",
      kata: "ネン",
      meaning: "wish, remembrance"
  },
  {
      kan: "件",
      roma: "Kudan",
      hira: "くだん",
      kata: "クダン",
      meaning: "affair, matter"
  },
  {
      kan: "所",
      roma: "Tokoro",
      hira: "ところ",
      kata: "トコト",
      meaning: "place"
  },
  {
      kan: "断",
      roma: "Dan",
      hira: "だん",
      kata: "ダン",
      meaning: "severance, disconnect"
  },
  {
      kan: "違う",
      roma: "Chigau",
      hira: "ちがう",
      kata: "チガウ",
      meaning: "Difference, differ"
  },
  {
      kan: "権",
      roma: "Ken",
      hira: "けん",
      kata: "ケン",
      meaning: "authority, power"
  },
  {
      kan:"才",
      roma: "Sai",
      hira: "さい",
      kata: "サイ", 
      meaning: "age"
  },
  {
      kan: "官",
      roma: "Kan",
      hira: "かん",
      kata: "カン",
      meaning: "bureaucrat, the government"
  },
  {
      kan: "絵",
      roma: "E",
      hira: "え",
      kata: "エ",
      meaning: "picture, drawing, painting, sketch"
  },
  {
      kan: "放",
      roma: "Ho",
      hira: "ほう",
      kata: "ホウ",
      meaning: "set free, release"
  },
  {
      kan: "愛",
      roma: "Ai",
      hira: "あい",
      kata: "アイ",
      meaning: "love"
  },
  {
      kan: "途",
      roma: "To",
      hira: "と",
      kata: "ト",
      meaning: "route, way, road"
  },
  {
      kan: "状",
      roma: "Jo",
      hira: "じょう",
      kata: "ジョウ",
      meaning: "status quo, conditions, circumstances, form, appearance"
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
document.getElementById("displayfour").innerHTML = `
      <link rel="stylesheet" type="text/css" href="something.css" />
<style>
  body{
  background-color: #FED9D9;
}
</style>
<body>
<h1 class="data-title" style="background-color: #F74E51;margin:0;border:0"><a href="index.html" title="Title">Kanji (${levelfour.length}) Results</a><h1>
${levelfour.map(kanjiTemplate).join('')}
<p class="footer">These ${levelfour.length} kanji were added recently. Check back soon for updates. UwU</p>
</body>
`
