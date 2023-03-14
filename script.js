const mobileMenu = document.querySelector(".mobile_menu");
const background = document.querySelector(".background");
const mobileNavOptions = document.querySelector(".mobile_navbar_options");
const body = document.querySelector("body");
const links = document.querySelectorAll("a");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("mobile_menu_open");
  background.classList.toggle("mobile_menu_open_background");
  mobileNavOptions.classList.toggle("mobile_navbar_options_displayed");
  body.classList.toggle("mobile_navbar_options_displayed");
});

for (let link of links) {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("mobile_menu_open");
    background.classList.remove("mobile_menu_open_background");
    mobileNavOptions.classList.remove("mobile_navbar_options_displayed");
    body.classList.remove("mobile_navbar_options_displayed");
  });
}
