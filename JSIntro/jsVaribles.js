
  var firstContent = document.getElementById("first");
  var secondContent = document.getElementById("second");
  var thirdContent =  document.getElementById("third");
  var fourthContent = document.getElementById("fourth");

  var randomVal = Math.floor(Math.random() * 6);

  var array = new Array(0,1,2,3,4,5);

  firstContent.textContent = array[randomVal];
      randomVal = Math.floor(Math.random() * 6);
  secondContent.textContent = array[randomVal];
      randomVal = Math.floor(Math.random() * 6);
  thirdContent.textContent = array[randomVal];
      randomVal = Math.floor(Math.random() * 6);
  fourthContent.textContent = array[randomVal];
