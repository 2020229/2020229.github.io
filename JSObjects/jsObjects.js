
function gameObj(hm, vsr) {
this.home = hm;
this.visitor = vsr;
this.homeScore = Math.floor((Math.random() * 20) + 70);
this.visitorScore = Math.floor((Math.random() * 20) + 70);
this.getSummary = function () {
  return[this.home, this.visitor, this.homeScore, this.visitorScore];
  }
}

var game = new gameObj();

 game[0] = new gameObj("SLUH", "CBHS");
 game[1] = new gameObj("SLUH", "CHAMI");
 game[2] = new gameObj("SLUH", "GATEWAY");
 game[3] = new gameObj("SLUH", "MICDS");
 game[4] = new gameObj("SLUH", "PRIORY");
 game[5] = new gameObj("SLUH", "LADUE");


var dis = document.getElementById("output0");
dis.textContent = game[0].getSummary();

var dis1 = document.getElementById("output1");
dis1.textContent = game[1].getSummary();

var dis2 = document.getElementById("output2");
dis2.textContent = game[2].getSummary();

var dis3 = document.getElementById("output3");
dis3.textContent = game[3].getSummary();

var dis4 = document.getElementById("output4");
dis4.textContent = game[4].getSummary();

var dis5 = document.getElementById("output5");
dis5.textContent = game[5].getSummary();
