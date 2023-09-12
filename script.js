var burgerMenu = document.getElementById("navbar");

var overlay = document.getElementById("menu");
var close = document.getElementById("leve");

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

close.addEventListener("click", function () {
  burgerMenu.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
