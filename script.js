document.getElementById("trafficLightOne").onmouseover = function() {mouseOverOne()};
document.getElementById("trafficLightOne").onmouseout = function() {mouseOutOne()};

function mouseOverOne() {
  document.getElementById("trafficLightOne").style.backgroundColor = "red";
}

function mouseOutOne() {
  document.getElementById("trafficLightOne").style.backgroundColor = "black";
}

document.getElementById("trafficLightTwo").onmouseover = function() {mouseOverTwo()};
document.getElementById("trafficLightTwo").onmouseout = function() {mouseOutTwo()};

function mouseOverTwo() {
  document.getElementById("trafficLightTwo").style.backgroundColor = "yellow";
}

function mouseOutTwo() {
  document.getElementById("trafficLightTwo").style.backgroundColor = "black";
}
document.getElementById("trafficLightThree").onmouseover = function() {mouseOverThree()};
document.getElementById("trafficLightThree").onmouseout = function() {mouseOutThree()};

function mouseOverThree() {
  document.getElementById("trafficLightThree").style.backgroundColor = "green";
}

function mouseOutThree() {
  document.getElementById("trafficLightThree").style.backgroundColor = "black";
}