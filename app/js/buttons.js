export function buttons() {
  const menuButton = document.querySelector("#menu-button");
  const reservationButton = document.querySelector("#reservation-button");

  menuButton &&
    menuButton.addEventListener(
      "click",
      () => (window.location.href = "/app/page/menu.html")
    );

  reservationButton &&
    reservationButton.addEventListener(
      "click",
      () => (window.location.href = "/app/page/reservation.html")
    );
}
