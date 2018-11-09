const level2Words = [
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
  },
  {
    kan:"三",
    roma:"San",
    hira:"かん",
    kata:"サン",
    meaning:"three"
  },
  {
    kan:"四",
    roma:"Shi",
    hira:"し",
    kata:"シ",
    meaning:"Four"
  },
  {
    kan:"五",
    roma:"Go",
    hira:"ご",
    kata:"ゴ",
    meaning: "Five"
  },
  {
    kan:"六",
    roma:"Roku",
    hira:"ろく",
    kata:"ロク",
    meaning: "Six"
  },
  {
    kan:"七",
    roma:"Shichi",
    hira:"しち",
    kata:"シチ",
    meaning: "Seven"
  },
  {
    kan:"八",
    roma:"Hachi",
    hira:"はち",
    kata:　"ハチ",
    meaning: "Eight"
  },
  {
    kan:"九",
    roma:"Kyuu",
    hira:"きゅう",
    kata:"キュウ",
    meaning: "Nine"
  },
  {
    kan:"十",
    roma:"Juu",
    hira:"じゅう",
    kata:"ジュウ",
    meaning: "Ten"
  },
  {
    kan:"日",
    roma:"Hi",
    hira:"ひ",
    kata:"ヒ",
    meaning: "Sun; Counter for Days"
  },
  {
    kan:"月",
    roma:"Tsuki",
    hira:"つき",
    kata:"ツキ",
    meaning: "Moon, Counter for Months"
  },
  {
    kan:"年",
    roma:"Toshi",
    hira:"とし",
    kata:"トシ",
    meaning: "Counter for year"
  },
  {
    kan:"木",
    roma:"Ki",
    hira:"き",
    kata:"キ",
    meaning: "Tree"
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
<h1 class="data-title" style="background-color: #F74E51;margin:0;border:0"><a href="index.html" title="Title">Kanji (${level2words.length}) Results</a><h1>
${level2Words.map(kanjiTemplate).join('')}
<p class="footer">These ${level2Words.length} kanji were added recently. Check back soon for updates. UwU</p>
</body>
`
