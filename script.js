const pandemicStartMap = "XX0X10010X000X010X0";
let startMapArray = pandemicStartMap.split("");
let totalNum = startMapArray.length;

startMapOut();
total();

function startMapOut() {
  let out = "";
  for (let i = 0; i < startMapArray.length; i++) {
    out += `${startMapArray[i]} `;
  }
  document.querySelector(".start-map").textContent = out;
}

function total() {
  document.querySelector(".total").innerHTML =
    "<h2>Total: " + totalNum + "</h2>";
}
