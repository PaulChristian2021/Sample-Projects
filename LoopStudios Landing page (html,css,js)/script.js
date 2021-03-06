const nav = document.querySelector(".nav"),
  menu = document.querySelector("#menu");
menu.addEventListener("click", () => {
  menuToggle();
}),
  window.addEventListener("resize", () => {
    800 <= window.innerWidth ? (nav.style.display = "flex") : mobileNav();
  });
function menuToggle() {
  menu.classList.contains("hamburger")
    ? (menu.classList.add("close"),
      menu.classList.remove("hamburger"),
      (nav.style.display = "flex"),
      (document.body.style.position = "fixed"))
    : mobileNav();
}
function mobileNav() {
  menu.classList.add("hamburger"),
    menu.classList.remove("close"),
    (nav.style.display = "none"),
    (document.body.style.position = "");
}
