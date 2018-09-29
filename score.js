var score = window.location.href.split("?")[1];
var time = window.location.href.split("?")[2];
var ranks = ["1st", "2nd", "3rd", "4th", "5th"]

var totalTime = "Total Time<br>" + time + "s";
var accuracy = "Accuracy<br>" + (score/8)*100 + "%";
var avgTime =  "Average Time<br>" + time/8 + "s";
var rank = "Rank<br>" + ranks[Math.floor(Math.random() * ranks.length)];

document.getElementById("score").innerHTML = "Your score was " + score + " out of 8";

document.getElementById("totalTime").innerHTML = totalTime;
document.getElementById("accuracy").innerHTML = accuracy;
document.getElementById("avgTime").innerHTML = avgTime;
document.getElementById("rank").innerHTML = rank;
