var score = window.location.href.split("?")[1];
var time = (window.location.href.split("?")[2])/100;

if(((score/8)*100)/time > 10){
  var rank = "Rank<br>Gold";
} else if(((score/8)*100)/time > 7) {
  var rank = "Rank<br>Silver";
} else if(((score/8)*100)/time > 1){
  var rank = "Rank<br>Bronze";
} else {
  var rank = "No Rank";
  document.getElementById("trophy-icon").className = "fas fa-times-circle";
}

var totalTime = "Total Time<br>" + time + "s";
var accuracy = "Accuracy<br>" + (score/8)*100 + "%";
var avgTime =  "Average Time<br>" + Math.round((time/8)*100)/100 + "s";

document.getElementById("score").innerHTML = "Your score was " + score + " out of 8";

document.getElementById("totalTime").innerHTML = totalTime;
document.getElementById("accuracy").innerHTML = accuracy;
document.getElementById("avgTime").innerHTML = avgTime;
document.getElementById("rank").innerHTML = rank;

window.onload = function(){
  document.getElementById("coins").innerHTML = "You received " + Math.round((((score/8)*100)/time)*10) + " coins!";
}

function submitScore(){
  window.location.href = 'https://thakkaha.dev.fast.sheridanc.on.ca/pme/mathu/submit.php?s=' + ((score/8)*100)/time + "&t=" + time + "&c=" + score + "&to=8&na=" + localStorage.getItem('name');
}
