const levelfour = [
  {
      kan: "複",
      roma: "Fuku",
      hira: "ふく",
      kata: "フク",
      meaning: "Double, multiple"
  },
  {
      kan:"齢",
      roma:"Yowai",
      hira:"よわい",
      kata:"ヨワイ",
      meaning:"age"
  },
  {
      kan:"谷",
      roma:"Tani",
      hira:"たに",
      kata:"タニ",
      meaning: "valley"
  },
  {
      kan:"封",
      roma:"Fuu",
      hira:"ふう",
      kata:"フウ",
      meaning: "A seal(envelope), closing"
  },
  {
      kan:"総",
      roma:"Sou",
      hira:"そう",
      kata:"ソウ",
      meaning: "total, gross, general"
  },
  {
      kan:"黄",
      roma:"Ki",
      hira:"き",
      kata:"キ",
      meaning: "yellow"
  },
  {
      kan:"纂",
      roma:"San",
      hira:"さん",
      kata:"サン",
      meaning: "Editing, compilation"
  },
  {
      kan:"干",
      roma: "Hi",
      hira: "ひ",
      kata: "ヒ",
      meaning: "dry"
  },
  {
      kan:"祭",
      roma: "Matsuri",
      hira: "まつり",
      kata: "マツリ",
      meaning: "festival"
  },
  {
      kan:"比",
      roma:"Hi",
      hira:"ひ",
      kata:"ヒ",
      meaning:"ratio"
  },
  {
      kan:"撚る",
      roma:"Yoru",
      hira:"よる",
      kata:"ヨル",
      meaning:"twisted, to twist, twist"
  },
  {
      kan:"刷",
      roma:"Suri",  
      hira:"すり",
      kata:"スリ",
      meaning:"print, to print"
  },
  {
      kan:"粒",
      roma:"tsubu",
      hira:"つぶ",
      kata:"ツブ",
      meaning:"grain"
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
