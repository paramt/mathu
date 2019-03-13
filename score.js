var LIMIT = localStorage.getItem("qCount");

var score = window.atob(localStorage.getItem("score"));
var time = window.atob(localStorage.getItem("seconds"))/100;
var type = localStorage.getItem("type");

if(((score/LIMIT)*100)/time > 10){
  var rank = "Rank<br>Gold";
} else if(((score/LIMIT)*100)/time > 7) {
  var rank = "Rank<br>Silver";
} else if(((score/LIMIT)*100)/time > 1){
  var rank = "Rank<br>Bronze";
} else {
  var rank = "No Rank";
  document.getElementById("trophy-icon").className = "fas fa-times-circle";
}

var totalTime = "Total Time<br>" + time + "s";
var accuracy = "Accuracy<br>" + Math.round((score/LIMIT)*100) + "%";
var avgTime =  "Average Time<br>" + Math.round((time/LIMIT)*100)/100 + "s";

document.getElementById("score").innerHTML = "Your score was " + score + " out of " + LIMIT;

document.getElementById("totalTime").innerHTML = totalTime;
document.getElementById("accuracy").innerHTML = accuracy;
document.getElementById("avgTime").innerHTML = avgTime;
document.getElementById("rank").innerHTML = rank;

window.onload = function(){
  document.getElementById("coins").innerHTML = "You received " + Math.round((((score/LIMIT)*100)/(time/LIMIT))) + " coins!";
  if(LIMIT == 10){
    document.getElementById("submit-score").disabled = false;
  }
}

function submitScore(){
  window.location.href = "submit.html";
}
