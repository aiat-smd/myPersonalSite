const checkbox = $("#checkbox");
const body = $("body");
const header = $("#header");
const navItems = $(".navbar__item-link");
const logo = $("#logo");

checkbox.on("click", function () {
  body.toggleClass("dark");
  header.toggleClass("dark");
  navItems.toggleClass("dark-nav");
  logo.toggleClass("logo__img-dark");
  logo.toggleClass("switch-logo");

});
