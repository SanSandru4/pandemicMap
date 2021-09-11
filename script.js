const pandemicStartMap = "XX0X10010X000X010X0";
let startMapArray = pandemicStartMap.split("");
let pandemicEnd = "";
let totalNum = 0;
let infectedNum = 0;
let perCent = 0;
let idStartaMap = "#start-map";
let idEndMap = "#end-map";

mapOut(startMapArray, idStartaMap);
total();
endMap();
let endMapArray = pandemicEnd.split("");
console.log(endMapArray);
mapOut(endMapArray, idEndMap);
infected();
parcentage();

function mapOut(arrayMap, idTag) {
  let out = "";
  for (let i = 0; i < arrayMap.length; i++) {
    if (arrayMap[i] == "X") {
      out += '<div class = "ocean"></div>';
    } else if (arrayMap[i] == "0") {
      out += '<div class = "uninfected"></div>';
    } else {
      out += '<div class = "infected"></div>';
    }
  }
  document.querySelector(idTag).innerHTML = out;
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

function endMap() {
  let pandemicLandMap = pandemicStartMap.split("X");
  for (let i = 0; i < pandemicLandMap.length; i++) {
    let landMapElement = pandemicLandMap[i].split("");
    if (pandemicLandMap[i].includes(1) === true) {
      for (let k = 0; k < landMapElement.length; k++) {
        if (landMapElement[k] == "0") {
          landMapElement[k] = "1";
        }
      }
      pandemicLandMap[i] = landMapElement.join("");
    }
  }
  pandemicEnd = pandemicLandMap.join("X");
}

function infected() {
  for (let i = 0; i < endMapArray.length; i++) {
    if (endMapArray[i] == 1) {
      infectedNum++;
    }
  }
  document.querySelector("#infected-value").innerHTML =
    "<h2>Infected: " + infectedNum + "</h2>";
}

function parcentage() {
  perCent = (infectedNum * 100) / totalNum;
  document.querySelector("#percentage").innerHTML =
    "<h2>Percentage: " + perCent + "% </h2>";
}
