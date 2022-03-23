// NAVBAR
const navbar = document.querySelector(".navbar");
const menuIcon = document.querySelector(".navbar__icon");
const categories = document.querySelectorAll("[data-categorie]");

if(window.matchMedia("(max-width: 1080px)").matches) {
  categories.forEach(categorie => {
    const link = categorie.querySelector("li > a");
    const content = categorie.querySelector("article");
    const back = content.querySelector("article button");
    link.addEventListener("click", e => {
      e.preventDefault();
      content.classList.add("open");
    });
    back.addEventListener("click", () => content.classList.remove("open"));
  });
}

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("open");
  document.documentElement.classList.toggle("o-hidden");
});

// FIXED NAVBAR
function scrollNav() {
  if (document.body.scrollTop > 24 || document.documentElement.scrollTop > 24) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
}
["DOMContentLoaded", "scroll", "load"].forEach(eventHandler => window.addEventListener(eventHandler, scrollNav));

// COOKIES MODAL
const containerCookies = document.querySelector(".cookies");
if(containerCookies) {
  const btnCookies = containerCookies.querySelector("button");
  btnCookies.addEventListener("click", () => {
    containerCookies.classList.add("hidden");
  });
}