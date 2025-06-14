//////////
// RECCOMENDATION auto carousel
let myIndex = 0;
let x = document.getElementsByClassName("quote");
let y = document.getElementsByClassName("dots")
carousel();
function carousel() {
  hideRecom();
  myIndex++;
  if (myIndex > x.length) { myIndex = 1 }
  x[myIndex - 1].style.display = "block";
  y[myIndex - 1].style.backgroundColor = "#8c734fb3";
}
function next() {
  carousel();
}
function prev() {
  if (myIndex < 2) {
    hideRecom();
    x[9].style.display = "block";
    myIndex = 10;
    y[myIndex - 1].style.backgroundColor = "#8c734fb3";
  }
  else {
    myIndex -= 2;
    carousel();
  }
}
function dotSelect(n) {
  myIndex = n;
  carousel();
}
function hideRecom() {
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.backgroundColor = "#00000000";
  }
}
//////////
//responsive nav
let mn = document.getElementById("mainnav");

function navFunction() {
  if (mn.className === "mainnav") {
    mn.className += " responsivee";
  }
  else {
    mn.className = "mainnav";
  }
}
// close nav on mobile after click
function jumpTo() {
  let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  if (viewportWidth < 930) { navFunction(); }
}