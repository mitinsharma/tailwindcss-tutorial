console.log('yay')

var hamburger = document.querySelector("#hamburger");
var menu = document.querySelector("#menu");


hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden")
  hamburger.classList.toggle("bg-white")
});