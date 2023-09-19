export function carousel() {
  
  const glideContainer = document.querySelector(".glide");

  const config = {
    type: "carousel",
    startAt: 1,
    perView: 5,
    gap: 20,
    bound: false,
    autoplay: 3000,
    animationDuration: 800,
    breakpoints: {
      1200: {
        perView: 4,
      },
      992: {
        perView: 3,
      },
      720: {
        perView: 2,
      },
      540: {
        perView: 1,
      },
    },
  };

  glideContainer && new Glide(".glide", config).mount();
}
