let content = document.querySelector(".container");
let loader = document.querySelector(".loader");
content.style.display = "none";
loader.style.display = "flex";

window.addEventListener("load", function () {
  loader.style.display = "none";
  content.style.display = "flex";
});
