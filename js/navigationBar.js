
const navbar = document.querySelector("#navbar-wrapper");

window.onscroll = function() {myFunction()};


function myFunction() {
  if (window.scrollY >= 100) {
    navbar.classList.add("sticky-header")
  } else {
    navbar.classList.remove("sticky-header");
  }
}