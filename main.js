const kanjiData = [
  {
      kan: "日",
      roma: "Hi",
      hira:"ひ, -び, -か",
      kata: "ニチ, ジツ",
      meaning: "day, sun, Japan, counter for days"
  },
  {
      kan: "一",
      roma: "Ichi",
      hira: "ひと-, ひと",
      kata: "イチ, イツ",
      meaning: "one"
  },
  {
      kan:"国",
      roma: "Kuni",
      hira: "くに",
      kata: "コク",
      meaning: "country"
  },
  {
      kan:"会",
      roma: "Kai",
      hira: "あ.う, あ.わせる, あつ.まる",
      kata: "カイ, エ",
      meaning:"meeting, meet, party, association, interview, join"
  },
  {
      kan:"人",
      roma:"Nin",
      hira: "ひと, -り, -と",
      kata: "ジン, ニン",
      meaning: "person"
  },
  {
      kan:"年",
      roma: "Toshi",
      hira: "とし",
      kata: "ネン",
      meaning:"year"
  },
   {
      kan:"大",
      roma: "Oo",
      hira: "おお-, おお.きい, -おお.いに",
      kata: "ダイ, タイ",
      meaning: "large, big"
   },
  {
     kan:"十",
     roma:"Juu",
     hira: "とお, と",
     kata: "ジュウ, ジッ, ジュッ",
     meaning: "ten"
  },
  {
     kan:"二",
     roma:"Ni",
     hira: "ふた, ふた.つ, ふたた.び",
     kata: "ニ, ジ",
     meaning: "two"
  },
  {
     kan:"本",
     roma:"Hon",
     hira: "もと",
     kata:  "ホン",
     meaning: "book, present, main, true, real"
  },
  {
     kan:"中",
     roma:"Naka",
     hira: "なか, うち, あた.る",
     kata:  "チュウ",
     meaning: "in, inside, middle, mean, center"
  },
  {
     kan:"長",
     roma:"Naga",
     hira: "なが.い, おさ",
     kata:  "チョウ",
     meaning: "long, leader"
  },
    {
     kan: "出",
     roma: "Shutsu",
     hira: "で.る, -で, だ.す, -だ.す, い.でる, い.だす",
     kata:  "シュツ, スイ",
     meaning: "exit, leave"
    },
  {
     kan: "三",
     roma:"San",
     hira:  "み, み.つ, みっ.つ",
     kata:  "サン, ゾウ",
     meaning:  "three"
  },
  {
     kan: "同",
     roma:"Doo",
     hira:  "おな.じ",
     kata:  "ドウ",
     meaning:   "same, agree, equal"
  },
  {
     kan: "時",
     roma:"Toki",
     hira: "とき, -どき",
     kata:  "ジ",
     meaning:  "time, hour"
  },
  {
    kan: "友",
    roma:"Tomo",
    hira: "とも",
    kata: "トモ",
    meaning: "friend"
  },
  {
    kan: "右",
    roma:"Migi",
    hira: "みぎ",
    kata: "ミギ",
    meaning: "right"
  },
  {
    kan: "左",
    roma: "Hidari",
    hira: "ひだり",
    kata: "ヒダリ",
    meaning: "left"
  }
  ];

function kanjiTemplate(symbol){
  return `
<link rel="stylesheet" type="text/css" href="something.css" />
  <div class="kanji">
    <h2 class="kan-name">${symbol.kan}<span class="words">(${symbol.roma}) <span class="species">(${symbol.hira})</span> <span class="species">(${symbol.kata})</span>
</h2>
  <p class="meaning"><strong>Meaning:</strong> ${symbol.meaning}</p>
  </div>
  `
}
document.getElementById("data").innerHTML = `
      <link rel="stylesheet" type="text/css" href="something.css" />
<style>
  body{
  background-color: #FED9D9;
}
</style>
<body>
<h1 class="data-title" style="background-color: #F74E51;margin:0;border:0"><a href="index.html" title="Title">Kanji (${kanjiData.length}) Results</a><h1>
${kanjiData.map(kanjiTemplate).join('')}
<p class="footer">These ${kanjiData.length} kanji were added recently. Check back soon for updates. UwU</p>
</body>
`
