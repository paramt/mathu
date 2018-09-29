window.onload = function(){
    startCountdown();
    localStorage.setItem("number", 0);
    localStorage.setItem("score", 0);

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
  setTimeout(function(){document.getElementById("countdown").innerHTML = "3"}, 1000);
  setTimeout(function(){document.getElementById("countdown").innerHTML = "2"}, 2000);
  setTimeout(function(){document.getElementById("countdown").innerHTML = "1"}, 3000);
  setTimeout(function(){document.getElementById("countdown").innerHTML = "Start!"}, 4000);
  setTimeout(function(){document.getElementById("countdown").style.visibility = "hidden"}, 5000);
  setTimeout(function(){
    var dataset = generateQuestion();

    localStorage.setItem("answer", dataset[1]);
    document.getElementById("question").innerHTML = dataset[0];
  }, 5000);
  startTimer();
}

var dividents = [64, 27, 25, 24, 33, 27, 65, 35, 49, 12, 32, 80, 62, 36, 56, 28, 125, 40, 42, 72, 36, 60]
var divisors =  [ 8,  9,  5,  6, 11,  3,  5,  5,  7,  4,  8, 10,  2,  6,  8,  4,  25,  8,  6,  8,  4, 12]

function generateQuestion(){
  var n = Math.floor(Math.random() * dividents.length);

  var question = dividents[n] + " <i class='fas fa-divide'></i> " + divisors[n];
  var answer = dividents[n] / divisors[n];

  return [question, answer];
}

var score = 0;
var number = 0;

function check(){
  number++;
  localStorage.setItem("number", number);
  if(localStorage.getItem("answer") == document.getElementById("text").value){
    score++;
    localStorage.setItem("score", score);
    console.log("correct!");
  } else {
    console.log("wrong!");
  }

  if(number == 8){
    console.log("Game over! " + score + " questions answered correctly out of " + number);
    window.location.href = "finish.html?" + score + "?" + seconds;
  } else {
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
      setInterval(function() {
        document.getElementById("timer").style.opacity = "1";
        document.getElementById("text").style.opacity = "1";
        document.getElementById("submit").style.opacity = "1";
        document.getElementById("timer").innerHTML = seconds++;
      }, 1000);
      generateQuestion();
    },
  4000)
}
