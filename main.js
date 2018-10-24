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
  {
      kan:"国",
      hira: "くに",
     kata: "コク",
     meaning: "country"
  },
  {
      kan:"会",
      hira: "あ.う, あ.わせる, あつ.まる",
      kata: "カイ, エ",
      meaning:"meeting, meet, party, association, interview, join"
  },
  {
      kan:"人",
      hira: "ひと, -り, -と",
      kata: "ジン, ニン",
     meaning: "person"
  },
  {
      kan:"年",
      hira: "とし",
      kata: "ネン",
      meaning:"year"
  },
   {
      kan:"大",
      hira: "おお-, おお.きい, -おお.いに",
      kata: "ダイ, タイ",
      meaning: "large, big"
   },
  {
     kan:"十",
     hira: "とお, と",
     kata: "ジュウ, ジッ, ジュッ",
     meaning: "ten"
  },
  {
     kan:"二",
     hira:   "ふた, ふた.つ, ふたた.び",
     kata: "ニ, ジ",
     meaning: "two"
  },
  {
     kan:"本",
     hira: "もと",
     kata:  "ホン",
     meaning: "book, present, main, true, real"
  },
  {
     kan:"中",
     hira: "なか, うち, あた.る",
     kata:  "チュウ",
     meaning: "in, inside, middle, mean, center"
  },
  {
      kan:"長",
     hira: "なが.い, おさ",
     kata:  "チョウ",
     meaning: "long, leader"
  },
    {
     kan: "出",
     hira: "で.る, -で, だ.す, -だ.す, い.でる, い.だす",
     kata:  "シュツ, スイ",
     meaning: "exit, leave"
    },
  {
     kan: "三",
     hira:  "み, み.つ, みっ.つ",
     kata:  "サン, ゾウ",
     meaning:  "three"
  },
  {
     kan: "同",
     hira:  "おな.じ",
     kata:  "ドウ",
     meaning:   "same, agree, equal"
  },
  {
     kan: "時",
     hira: "とき, -どき",
     kata:  "ジ",
     meaning:  "time, hour"
  },
  {
    kan: "友",
    hira: "とも",
    kata: "トモ",
    meaning: "friend"
  },
  {
    kan: "右",
    hira: "みぎ",
    kata: "ミギ",
    meaning: "right"
  },
  {  
    kan: "左",
    hira: "ひだり",
    kata: "ヒダリ",
    meaning: "left"
  },
  {
    kan: "桜",
    hira: "さくら",
    kata: "サクラ",
    meaning: "cherry blossom"
  },
  {
    kan: "頬",
    hira: "ほほ",
    kata: "ホホ",
    meaning: "cheek"
  }
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
