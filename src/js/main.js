const checkbox = $("#checkbox");
const body = $("body");
const header = $("#header");
const navItems = $(".nav-link");
const navLink = $(".nav-linkk");

checkbox.on("click", function () {
  body.toggleClass("dark");
  navItems.toggleClass("dark-nav");
  navLink.toggleClass("dark-nav");

  $("h1, h2, h3, h5, h6, .skills-left__desc").toggleClass("dark-nav");

});

AOS.init();

