const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuHeader = document.querySelector(".menu-header");
const menuNav = document.querySelector(".menu-nav");
const navItem = document.querySelectorAll(".nav-item");

// Menu is closed upon intial load
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuHeader.classList.add("show");
    menuNav.classList.add("show");
    navItem.forEach(item => item.classList.add("show"));
    // Reset menu
    showMenu = true;
  }

   else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuHeader.classList.remove("show");
    menuNav.classList.remove("show");
    navItem.forEach(item => item.classList.remove("show"));
    // Reset menu state
    showMenu = false;
  }
}
