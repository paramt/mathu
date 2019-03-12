var data;

window.onload = function(){
  getData();
}

function back(){
  window.location.href='/main.html?' + window.localStorage.getItem("name");
}

function getData(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      console.log(this.responseText)
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
