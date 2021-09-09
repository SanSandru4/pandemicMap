const pandemicStartMap = "XX0X10010X000X010X0";
let startMapArray = pandemicStartMap.split("");
let totalNum = 0;

startMapOut();
total();
endMapOut();

function startMapOut() {
  let out = "";
  for (let i = 0; i < startMapArray.length; i++) {
    if (startMapArray[i] == "X") {
      out += '<div class = "ocean"></div>';
    } else if (startMapArray[i] == "0") {
      out += '<div class = "uninfected"></div>';
    } else out += '<div class = "infected"></div>';
  }
  document.querySelector("#start-map").innerHTML = out;
}

function total() {
  for (let i = 0; i < startMapArray.length; i++) {
    if (startMapArray[i] != "X") {
      totalNum++;
    }
  }
  document.querySelector("#total").innerHTML =
    "<h2>Total: " + totalNum + "</h2>";
}

function endMapOut() {
  let pandemicLandMap = pandemicStartMap.split("X");
  console.log(pandemicLandMap);
}
