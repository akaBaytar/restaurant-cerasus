export function modal() {
  //dom variables
  const button = document.querySelector("#hero-button");
  const modal = document.querySelector(".modal-container");
  const form = document.querySelector(".reservation-form");

  //event listeners
  button.addEventListener("click", () => {
    modal.classList.add("show");
  });

  // mouse event
  window.addEventListener("click", (e) => {
    if (
      !e.composedPath().includes(form) &&
      !e.composedPath().includes(button)
    ) {
      modal.classList.remove("show");
    }
  });

  //touch event for mobile
  window.addEventListener("touchstart", (e) => {
    if (
      !e.composedPath().includes(form) &&
      !e.composedPath().includes(button)
    ) {
      modal.classList.remove("show");
    }
  });
}
