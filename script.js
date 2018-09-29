var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
var btn3 = document.getElementById("btn-3");
var btn4 = document.getElementById("btn-4");

window.onload = function(){
  document.getElementById('name').innerHTML = "Welcome, " + window.location.href.split('?')[1].replace(/%20/g, " ");;
  localStorage.setItem("name", window.location.href.split('?')[1]);

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
};
