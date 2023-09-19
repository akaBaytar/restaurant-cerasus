export function navbar() {
  //dom variables
  const navCheckbox = document.querySelector("#nav-check");
  const navMenu = document.querySelector(".navigation");
  const navButton = document.querySelector(".navigation-button");

  //fuction
  function clickOutside(e) {
    if (
      !e.composedPath().includes(navMenu) &&
      !e.composedPath().includes(navButton)
    ) {
      navCheckbox.checked = false;
      navMenu.style.left = "-100%";
    }
  }

  //event listeners
  navCheckbox.addEventListener("click", () => {
    if (navCheckbox.checked) {
      navMenu.style.left = "0";
    } else {
      navMenu.style.left = "-100%";
    }
  });

  window.addEventListener("click", clickOutside);
  window.addEventListener("touchstart", clickOutside);
}
