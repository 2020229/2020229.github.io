
document.querySelector("h1.first").innerHTML = "<b><i>This is the first line of the web page.</i></b>";

  var liRef = document.getElementsByTagName("li");

  var ulRef = liRef[0].parentNode;

  ulRef.setAttribute("class", "first");

  var liEle = document.createElement("li");

  var txtNode = document.createTextNode("directions");

  liEle.appendChild(txtNode);

  ulRef.appendChild(liEle);
