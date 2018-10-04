var xmlhttp = new XMLHttpRequest();
var url = "https://mariscos1.github.io/Ramonji/kanji.json";
var kanjiData;

xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    kanjiData = JSON.parse(this.responseText);
 //   kanjiData.map(kanjiTemplate).join('');
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

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
<h1 class="data-title" style="background-color: #F74E51;margin:0;border:0"><a href="index.html" title="Title">Kanji (${Object.keys(kanjiData).length}) results</a><h1>
${kanjidata.map(kanjiTemplate)}
<p class="footer">These kanjiData.length kanji were added recently. Check back soon for updates. UwU</p>
</body>
` 
