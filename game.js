var LIMIT = localStorage.getItem("qCount");
var TYPE = localStorage.getItem("type");
var NEG = JSON.parse(localStorage.getItem("negSubtraction"));

window.onload = function(){
    startCountdown();
    localStorage.setItem("number", 0);
    localStorage.setItem("score", 0);
    document.getElementById("text").style.opacity = 0;

    var txt = document.getElementById("text");
    var btn = document.getElementById("submit");

    text.value = "";

    txt.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        btn.click();
      }
    });
}

function startCountdown(){
  setTimeout(function(){document.getElementById("countdown").style.opacity = "0";}, 800);
  setTimeout(function(){document.getElementById("countdown").style.opacity = "1"; document.getElementById("countdown").innerHTML = "3"}, 1000);
  setTimeout(function(){document.getElementById("countdown").style.opacity = "0";}, 1800);
  setTimeout(function(){document.getElementById("countdown").style.opacity = "1"; document.getElementById("countdown").innerHTML = "2"}, 2000);
  setTimeout(function(){document.getElementById("countdown").style.opacity = "0";}, 2800);
  setTimeout(function(){document.getElementById("countdown").style.opacity = "1"; document.getElementById("countdown").innerHTML = "1"}, 3000);
  setTimeout(function(){document.getElementById("countdown").style.opacity = "0";}, 3800);
  setTimeout(function(){document.getElementById("countdown").style.opacity = "1"; document.getElementById("countdown").innerHTML = "Go!"}, 4000);
  setTimeout(function(){document.getElementById("countdown-wrapper").style.visibility = "hidden"; document.getElementById("countdown-wrapper").style.height = "15vh"}, 5000);
  setTimeout(function(){
    var dataset = generateQuestion();

    localStorage.setItem("answer", dataset[1]);
    document.getElementById("question").innerHTML = dataset[0];
  }, 5000);
  startTimer();
}


function generateQuestion(){
  var a = Math.floor(Math.random() * 10);
  var b = Math.floor(Math.random() * 10);

  if(TYPE == "addition"){
    var question = a + " + " + b;
    var answer = a + b;
  }

  if(TYPE == "subtraction"){
    if(NEG == true){
      var question = a + " - " + b;
      var answer = a - b;
    } else {
      var question = Math.max(a, b) + " - " + Math.min(a, b);
      var answer = Math.max(a, b) - Math.min(a, b);
    }
  }

  if(TYPE == "multiplication"){
    var question = a + " &times; " + b;
    var answer = a * b;
  }

  if(TYPE == "division"){
    while(b == 0){
      b = Math.floor(Math.random() * 10);
    }

    var question = a*b + " &divide; " + b;
    var answer = (a*b) / b;
  }

  if(question == document.getElementById("question").innerHTML){
    generateQuestion()
  } else {
    return [question, answer];
  }
}

var score = 0;
var number = 0;

function check(){
  number++;
  localStorage.setItem("number", number);

  if(localStorage.getItem("answer") == document.getElementById("text").value){
    score++;
    localStorage.setItem("score", score);
  }

  if(number == LIMIT){
    localStorage.setItem("score", window.btoa(score))
    localStorage.setItem("seconds", window.btoa(seconds))
    window.location.href = "finish.html";
  } else {
    document.getElementById("qnumber").innerHTML = "Q" + (number + 1);
    var dataset = generateQuestion();
    localStorage.setItem("answer", dataset[1]);
    document.getElementById("question").innerHTML = dataset[0];
    document.getElementById("text").value = "";
    document.getElementById("text").focus();
  }
}

var seconds = 0;

function startTimer(){
  setTimeout(
    function(){
      setTimeout(function(){
        document.getElementById("timer").style.opacity = "1";
        document.getElementById("text").style.opacity = "1";
        document.getElementById("text").disabled = false;
        document.getElementById("submit").disabled = false;
        document.getElementById("text").focus();
        document.getElementById("submit").style.opacity = "1";

        setInterval(function() {
          document.getElementById("timer").innerHTML = Math.floor((seconds++)/100);
          document.getElementById("qnumber").style.opacity = "1";
        }, 10);
      }, 1000)

      generateQuestion();
    },
  4000)
}
