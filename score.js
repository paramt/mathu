var LIMIT = localStorage.getItem("qCount");

var data = window.atob((window.location.href).split("finish.html?")[1]);

var score = data.split("?")[0];
var time = data.split("?")[1]/100;
var type = data.split("?")[2];

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
}

function submitScore(){
  window.location.href = 'https://thakkaha.dev.fast.sheridanc.on.ca/pme/mathu/submit.php?s=' + ((score/LIMIT)*100)/time + "&t=" + time + "&c=" + score + "&to=" + LIMIT + "&na=" + localStorage.getItem('name') + "&ty=" + type;
}
