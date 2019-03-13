var data;
var back = "/";

window.onload = function(){
  getData();
  if(window.location.href.split("leaderboard/")[1].substring(0, 1) == "?"){
    document.getElementById("heading").innerHTML = "Your score: " + window.location.href.split("leaderboard/?")[1];
    back = '/main.html';
  } else {
    back = '/';
  }
}

function getData(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      updateLeaderboard();
    }
  };

  xhttp.open("GET", "https://thakkaha.dev.fast.sheridanc.on.ca/pme/mathu/retrieve.php", true);
  xhttp.send();
}

function updateLeaderboard(){
  document.getElementById('1a').innerHTML = data.addition[0];
  document.getElementById('2a').innerHTML = data.addition[1];
  document.getElementById('3a').innerHTML = data.addition[2];

  document.getElementById('1b').innerHTML = data.subtraction[0];
  document.getElementById('2b').innerHTML = data.subtraction[1];
  document.getElementById('3b').innerHTML = data.subtraction[2];

  document.getElementById('1c').innerHTML = data.multiplication[0];
  document.getElementById('2c').innerHTML = data.multiplication[1];
  document.getElementById('3c').innerHTML = data.multiplication[2];

  document.getElementById('1d').innerHTML = data.division[0];
  document.getElementById('2d').innerHTML = data.division[1];
  document.getElementById('3d').innerHTML = data.division[2];
}
