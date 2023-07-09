/*
4. Build a responsive Navbar, on smaller screens it should be a hamburger menu which on click should reveal the menu items nicely, and on larger screens they should be displayed directly on the screen.
*/

function toggleMenu() {
  var menu = document.getElementById("menu");
  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("responsive");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}
