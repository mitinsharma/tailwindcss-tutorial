var hamburger = document.querySelector("#hamburger")
var menu = document.querySelector("#menu")
var hLinks = document.querySelectorAll("#hLink")

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden")
  hamburger.classList.toggle("bg-white")
});

hLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
  });
});