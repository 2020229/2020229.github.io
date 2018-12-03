var x = 0;

function process1() {
  x++;

  if(x % 2 == 0)
  {
  this.textContent = "hello";
  }
  else
  {
  this.textContent = "";
  }
}

var element1 = document.getElementById("special");
element1.addEventListener('click', process1, false);

function process2() {
    this.setAttribute('class', 'thing2');
}

var elements2 = document.getElementsByClassName("thing1");
elements2[0].addEventListener('mouseover', process2, false);

function process3(e) {
    element3.textContent = e.keyCode;
}

var element3 = document.getElementById("extraSpecial");
document.addEventListener('keydown', process3, false);
/*
function process4(input) {
    elements2[1].textContent = input + 17;
}

var element3 = document.getElementById("extraSpecial");
elements2[1].addEventListener('click', function(){process4(5);}, false);
*/
function process5(e,input) {
    elements2[1].textContent = "The target of the event was: " + e.target + "The input was: " + input;
}

var element3 = document.getElementById("extraSpecial");
elements2[1].addEventListener('mousedown', function(e){process5(e,"Hello");}, false);
