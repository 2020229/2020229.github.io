
var xCoord = document.getElementById("xLis");
var yCoord = document.getElementById("yLis");

function xCoordCalc(e) {
  xCoord.textContent = "xCoord: " + e.clientX + " px";
}

function yCoordCalc(e) {
  yCoord.textContent = "yCoord: " + e.clientY + " px";
}

function reset(e) {
  if(e.keyCode == 67)
  {
    //document.write(e.keyCode);
    xCoord.textContent = "xCoord: 0";
    yCoord.textContent = "yCoord: 0";
  }
}

xCoord.addEventListener('mousemove', xCoordCalc, false);
yCoord.addEventListener('mousemove', yCoordCalc, false);
document.addEventListener('keydown',reset, false);
