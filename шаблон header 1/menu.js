var menu = document.querySelector(".main-nav");
var menuBtn = document.querySelector(".main-nav__btn");

menu.classList.remove("main-nav--nojs");

menuBtn.addEventListener("click", function() {
  if (menu.classList.contains("main-nav--closed")) {
    menu.classList.remove("main-nav--closed");
    menu.classList.add("main-nav--opened");
  } else {
    menu.classList.add("main-nav--closed");
    menu.classList.remove("main-nav--opened");
  }
});
