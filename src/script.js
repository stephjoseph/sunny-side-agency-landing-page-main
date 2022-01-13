const menuBtn = document.getElementById("menu-btn");
const mobileNav = document.getElementById("mobile-nav");
const mobileNavBar = document.getElementById("mobile-navbar");
const desktopNavBar = document.getElementById("desktop-navbar");

window.addEventListener("scroll", fixedNav);

document.addEventListener("DOMContentLoaded", () => {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("opacity-50");
    mobileNav.classList.toggle("translate-x-[1000%]");
  });
});

function fixedNav() {
  if (window.scrollY > mobileNavBar.offsetHeight) {
    mobileNavBar.classList.add("bg-black");
    desktopNavBar.classList.add("bg-black");
    desktopNavBar.classList.remove("py-[48px]");
    desktopNavBar.classList.add("py-[34px]");
  } else {
    mobileNavBar.classList.remove("bg-black");
    desktopNavBar.classList.remove("bg-black");
    desktopNavBar.classList.add("py-[48px]");
    desktopNavBar.classList.remove("py-[34px]");
  }
}
