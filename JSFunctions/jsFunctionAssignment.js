var firstContent = document.getElementById("first");
var secondContent = document.getElementById("second");
var thirdContent =  document.getElementById("third");
var fourthContent = document.getElementById("fourth");

var rand1 = Math.floor(Math.random() * 101) +1;
var rand2 = Math.floor(Math.random() * 101) +1;

firstContent.textContent = "Sum: " + sumCalc(rand1, rand2);

secondContent.textContent = "Difference: " + diffCalc(rand1, rand2);

thirdContent.textContent = "Product: " + proCalc(rand1, rand2);

fourthContent.textContent = "Quotient: " + quoCalc(rand1, rand2);

function sumCalc(x,y) {
  return x+y;
}

function diffCalc(x,y) {
  return x-y;
}

function proCalc(x,y) {
  return x*y;
}

function quoCalc(x,y) {
  return x/y;
}
