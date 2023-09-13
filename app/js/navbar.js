export function navbarFunction() {
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

  window.addEventListener("click", (e) => {
    if (
      !e.composedPath().includes(navMenu) &&
      !e.composedPath().includes(navButton)
    ) {
      navCheckbox.checked = false;
      navMenu.style.left = "-100%";
    }
  });
}
