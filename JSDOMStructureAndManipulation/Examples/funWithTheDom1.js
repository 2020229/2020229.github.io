
//var element1 =  document.querySelector("h1.first");
//element1.firstChild.nodeValue = "Dreary Monday";

// UNCOMMENT THE TWO LINES BELOW AND SEE WHAT HAPPENS
//var element2 = document.querySelector("div.second");
//element2.firstChild.nodeValue = "sunny day";

// UNCOMMENT THE TWO LINES BELOW AND SEE WHAT HAPPENS
//var element2 = document.getElementById("para");
//element2.innerHTML = "<b><i>This is bold italicized text.</i></b>";

// UNCOMMENT THE TWO LINES BELOW AND SEE WHAT HAPPENS
//var newThing = document.createElement("h1");
//var someText = document.createTextNode("the rain in Spain stays mainly on the plains");
//newThing.appendChild(someText);
//document.body.appendChild(newThing);

// UNCOMMENT THE TWO LINES BELOW AND SEE WHAT HAPPENS
//var theElements = document.getElementsByClassName("second");
//theElements[1].previousSibling.previousSibling.setAttribute("class", "third");






// THE CODE BELOW WAS FROM OUR PREVIOUS EXAMPLE. I INSERTED IT INTO THIS EXAMPLE.

var listBad = ["pizza", "ice cream", "soda", "hostess cupcakes"];
var listGood = ["tofu", "broccoli", "coconut water", "blueberries"];

var badChoice = document.getElementById("bad");
var goodChoice = document.getElementById("good");

var listItems = document.getElementsByTagName("li");


function update(e) {
	var target = e.target;

	if(target == badChoice)
	{
		for(i = 0; i < listBad.length; i++)
		{
			listItems[i].firstChild.nodeValue = listBad[i];
		}
	}
	else
	{
		for(i = 0; i < listGood.length; i++)
		{
			listItems[i].firstChild.nodeValue = listGood[i];
		}
	}

}

badChoice.addEventListener("click", update, false);
goodChoice.addEventListener("click", update, false);
