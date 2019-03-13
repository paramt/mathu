var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
var btn3 = document.getElementById("btn-3");
var btn4 = document.getElementById("btn-4");

window.onload = function(){
  document.getElementById('name').innerHTML = "Welcome, " + localStorage.getItem("name");
  resizeButtons()
};

function resizeButtons(){
  btn1.style.width = window.innerWidth/5 + "px";
  btn1.style.height = window.innerWidth/5 + "px";
  btn2.style.width = window.innerWidth/5 + "px";
  btn2.style.height = window.innerWidth/5 + "px";
  btn3.style.width = window.innerWidth/5 + "px";
  btn3.style.height = window.innerWidth/5 + "px";
  btn4.style.width = window.innerWidth/5 + "px";
  btn4.style.height = window.innerWidth/5 + "px";

  btn1.style.marginLeft = window.innerWidth/50 + "px";
  btn1.style.marginRight = window.innerWidth/50 + "px";
  btn2.style.marginLeft = window.innerWidth/50 + "px";
  btn2.style.marginRight = window.innerWidth/50 + "px";
  btn3.style.marginLeft = window.innerWidth/50 + "px";
  btn3.style.marginRight = window.innerWidth/50 + "px";
  btn4.style.marginLeft = window.innerWidth/50 + "px";
  btn4.style.marginRight = window.innerWidth/50 + "px";

  if(screen.width<600){
    btn1.style.width = window.innerWidth/3 + "px";
    btn1.style.height = window.innerWidth/3 + "px";
    btn2.style.width = window.innerWidth/3 + "px";
    btn2.style.height = window.innerWidth/3 + "px";
    btn3.style.width = window.innerWidth/3 + "px";
    btn3.style.height = window.innerWidth/3 + "px";
    btn4.style.width = window.innerWidth/3 + "px";
    btn4.style.height = window.innerWidth/3 + "px";

    btn1.style.backgroundColor = "inherit";
    btn1.style.color = "white";
    btn2.style.backgroundColor = "inherit";
    btn2.style.color = "white";
    btn3.style.backgroundColor = "inherit";
    btn3.style.color = "white";
    btn4.style.backgroundColor = "inherit";
    btn4.style.color = "white";

    btn1.style.marginBottom = window.innerWidth/50 + "px";
    btn1.style.marginRight = window.innerWidth/30 + "px";
    btn2.style.marginLeft = window.innerWidth/30 + "px";
    btn2.style.marginBottom = window.innerWidth/50 + "px";
    btn3.style.marginTop = window.innerWidth/50 + "px";
    btn3.style.marginRight = window.innerWidth/30 + "px";
    btn4.style.marginLeft = window.innerWidth/30 + "px";
    btn4.style.marginTop = window.innerWidth/50 + "px";
  }
}

function link(type){
  localStorage.setItem("type", type);
  window.location.href = "game.html";
}
