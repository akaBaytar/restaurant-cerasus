//dom variables
const navButton = document.querySelector("#nav-check");
const navMenu = document.querySelector(".navigation");

//event listener
navButton.addEventListener("click", () => {
  if (navButton.checked) {
    navMenu.style.left = "0";
  } else {
    navMenu.style.left = "-100%";
  }
});
