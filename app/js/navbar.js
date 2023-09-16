export function navbar() {
  //dom variables
  const navCheckbox = document.querySelector("#nav-check");
  const navMenu = document.querySelector(".navigation");
  const navButton = document.querySelector(".navigation-button");

  //event listener
  navCheckbox.addEventListener("click", () => {
    if (navCheckbox.checked) {
      navMenu.style.left = "0";
    } else {
      navMenu.style.left = "-100%";
    }
  });

  // mouse event
  window.addEventListener("click", (e) => {
    if (
      !e.composedPath().includes(navMenu) &&
      !e.composedPath().includes(navButton)
    ) {
      navCheckbox.checked = false;
      navMenu.style.left = "-100%";
    }
  });

  // touch event for mobile
  window.addEventListener("touchstart", (e) => {
    if (
      !e.composedPath().includes(navMenu) &&
      !e.composedPath().includes(navButton)
    ) {
      navCheckbox.checked = false;
      navMenu.style.left = "-100%";
    }
  });
}
