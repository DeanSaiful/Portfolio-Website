const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
const navBar = document.getElementById("navBar");
const body = document.body;

menuIcon.addEventListener("click", () => {
  navBar.classList.add("active");
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
  body.style.overflow = "hidden"; // Prevent scrolling when menu is active
});

closeIcon.addEventListener("click", () => {
  navBar.classList.remove("active");
  closeIcon.style.display = "none";
  menuIcon.style.display = "block";
  body.style.overflow = "auto"; // Allow scrolling when menu is closed
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 750) {
    navBar.classList.remove("active");
    closeIcon.style.display = "none";
    menuIcon.style.display = "none";
    body.style.overflow = "auto"; // Allow scrolling when window is resized
  } else {
    menuIcon.style.display = "block";
  }
});