var headReff = document.getElementsByClassName("secondHead");

var bodReff1 = document.getElementById("colLef2");
var bodReff2 = document.getElementById("colRig2");
var bodReff3 = document.getElementById("colMid2");

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
    headReff[0].textContent = "Information (+)"
  }
  else
  {
    bodReff1.style.display = "block";
    usBool = true;
    headReff[0].textContent = "Information (-)"
  }
}

  function missionHead(e) {
    if(misBool == true)
    {
      bodReff2.style.display = "none";
      misBool = false;
      headReff[1].textContent = "Picture Gallery (+)"
    }
    else
    {
      bodReff2.style.display = "block";
      misBool = true;
      headReff[1].textContent = "Picture Gallery (-)"
    }

}

var firstLiReff = document.getElementsByClassName("firstLi");
//var secondLiReff = document.getElementsByClassName("firstLi");
//var thirdLiReff = document.getElementsByClassName("firstLi");
//fixed in CSS, beneficial bug

function studentHead(e) {

  if(stuBool == true)
  {
    bodReff3.style.display = "none";
    stuBool = false;
    headReff[2].textContent = "Game Objective (+)"
  }
  else
  {
    bodReff3.style.display = "inline";
    stuBool = true;
    headReff[2].textContent = "Game Objective (-)"

    firstLiReff[0].style.display = "inline";
    firstLiReff[1].style.display = "inline";
    firstLiReff[2].style.display = "inline";
  }


}

headReff[0].addEventListener('click', aboutUsHead, false);
headReff[1].addEventListener('click', missionHead, false);
headReff[2].addEventListener('click', studentHead, false);
