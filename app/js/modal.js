export function modal() {
  //dom variables
  const button = document.querySelector("#hero-button");
  const modal = document.querySelector(".modal-container");
  const form = document.querySelector(".reservation-form");

  //function
  function clickOutside(e) {
    if (
      !e.composedPath().includes(form) &&
      !e.composedPath().includes(button)
    ) {
      modal.classList.remove("show");
    }
  }

  //event listeners
  if (modal) {
    button.addEventListener("click", () => {
      modal.classList.add("show");
    });

    window.addEventListener("click", clickOutside);
    window.addEventListener("touchstart", clickOutside);
  }
}
