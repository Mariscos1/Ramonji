var request = new XMLHttpRequest();
request.open('GET', "https://mariscos1.github.io/Ramonji/kanji.json", true);

var kanjiData;

 request.onload = function() {
  var kanjiData = JSON.parse(request.responseText);
 }

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

function setup() {
  noCanvas();
}
  
document.getElementById("data").innerHTML = `
      <link rel="stylesheet" type="text/css" href="something.css" />
<style>
  body{
  background-color: #FED9D9;
}
</style>
<body>
<h1 class="data-title" style="background-color: #F74E51;margin:0;border:0"><a href="index.html" title="Title">Kanji (${kanjiData.length}) results</a><h1>

<p class="footer">These kanjiData.length kanji were added recently. Check back soon for updates. UwU</p>
</body>
`
