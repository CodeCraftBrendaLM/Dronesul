document.addEventListener("DOMContentLoaded", function () {
  const menuMobileBtn = document.querySelector(".hamburger-menu");
  const menuMobile = document.querySelector(".menu-mobile-container");

  if (menuMobileBtn && menuMobile) {
    menuMobileBtn.addEventListener("click", function () {
      menuMobile.classList.toggle("is-active");
    });
  }
});
