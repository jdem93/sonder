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
