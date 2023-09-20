export function scroll() {
  const button = document.querySelector(".scroll-button");

  window.addEventListener("scroll", () => {
    scrollY > 800
      ? button.classList.add("show")
      : button.classList.remove("show");
  });

  button.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
}
