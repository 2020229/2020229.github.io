var headReff = document.getElementsByClassName("secondHead");

var bodReff3 = document.getElementById("colMid2");


var stuBool = false;


bodReff3.style.display = "none";


var firstLiReff = document.getElementsByClassName("firstLi");
//var secondLiReff = document.getElementsByClassName("firstLi");
//var thirdLiReff = document.getElementsByClassName("firstLi");
//fixed in CSS, beneficial bug

function studentHead(e) {

  if(stuBool == true)
  {
    bodReff3.style.display = "none";
    stuBool = false;
    headReff[0].textContent = "Activities (+)"
  }
  else
  {
    bodReff3.style.display = "inline";
    stuBool = true;
    headReff[0].textContent = "Activities (-)"

    firstLiReff[0].style.display = "inline";
    firstLiReff[1].style.display = "inline";
    firstLiReff[2].style.display = "inline";
  }


}

headReff[0].addEventListener('click', studentHead, false);
