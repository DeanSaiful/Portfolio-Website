// script.js
const popupButtons = document.querySelectorAll(".service_button");
const popupContainers = document.querySelectorAll(".popupContainer");
const overlay = document.getElementById("overlay");

popupButtons.forEach(button => {
  button.addEventListener("click", () => {
    const targetContainerId = button.getAttribute("data-target");
    const targetContainer = document.getElementById(targetContainerId);
    
    targetContainer.style.display = "block";
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
  });
});

overlay.addEventListener("click", () => {
  popupContainers.forEach(container => {
    container.style.display = "none";
  });
  overlay.style.display = "none";
  document.body.style.overflow = "auto";
});


