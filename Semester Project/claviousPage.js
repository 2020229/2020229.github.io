var headReff = document.getElementsByClassName("secondHead");

var bodReff1 = document.getElementById("colLef2");
var bodReff2 = document.getElementById("colRig2");
var bodReff3 = document.getElementById("colCen2");

var usBool = false;
var misBool = false;
var stuBool = false;

bodReff1.style.display = "none";
bodReff2.style.display = "none";
bodReff3.style.display = "none";

function aboutUsHead(e) {
  if(usBool == true)
  {
    bodReff1.style.display = "none";
    usBool = false;
    headReff[0].textContent = "About Us (+)"
  }
  else
  {
    bodReff1.style.display = "block";
    usBool = true;
    headReff[0].textContent = "About Us (-)"
  }
}

  function missionHead(e) {
    if(misBool == true)
    {
      bodReff2.style.display = "none";
      misBool = false;
      headReff[1].textContent = "Mission (+)"
    }
    else
    {
      bodReff2.style.display = "block";
      misBool = true;
      headReff[1].textContent = "Mission (-)"
    }

}

function studentHead(e) {
  if(stuBool == true)
  {
    bodReff3.style.display = "none";
    headReff[2].textContent = "Student Perspective (+)"
    stuBool = false;
  }
  else
  {
    bodReff3.style.display = "block";
    stuBool = true;
    headReff[2].textContent = "Student Perspective (-)"
  }

}

headReff[0].addEventListener('click', aboutUsHead, false);
headReff[1].addEventListener('click', missionHead, false);
headReff[2].addEventListener('click', studentHead, false);
