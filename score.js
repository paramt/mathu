var score = window.location.href.split("?")[1];
var time = window.location.href.split("?")[2];

if(((score/8)*100)/time > 10){
  var ranks = "Gold";
} else if(((score/8)*100)/time > 7) {
  var ranks = "Silver";
} else {
  var ranks = "Bronze";
}

var totalTime = "Total Time<br>" + time + "s";
var accuracy = "Accuracy<br>" + (score/8)*100 + "%";
var avgTime =  "Average Time<br>" + time/8 + "s";
var rank = "Rank<br>" + ranks;

document.getElementById("score").innerHTML = "Your score was " + score + " out of 8";

document.getElementById("totalTime").innerHTML = totalTime;
document.getElementById("accuracy").innerHTML = accuracy;
document.getElementById("avgTime").innerHTML = avgTime;
document.getElementById("rank").innerHTML = rank;

window.onload = function(){
  document.getElementById("coins").innerHTML = "You received " + Math.round((((score/8)*100)/time)*10) + " coins!";
}
