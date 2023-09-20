export function gallery() {
  //dom variables
  const lightbox = document.querySelector("#lightbox");
  const images = document.querySelectorAll(".image-container img");

  const prevButton = document.querySelector("#prev-img");
  const nextButton = document.querySelector("#next-img");
  const buttonContainer = document.querySelector(".button-container");

  //variables
  let currentImg;

  //functions
  function showLightbox(image, index) {
    image.addEventListener("click", () => {
      lightbox.classList.add("show");
      const img = document.createElement("img");
      img.src = image.src;
      lightbox.appendChild(img);
      currentImg = index;
    });
  }

  function hideLightbox(e) {
    const img = lightbox.querySelector("#lightbox img");
    if (
      !e.composedPath().includes(img) &&
      !e.composedPath().includes(buttonContainer)
    ) {
      lightbox.classList.remove("show");
      img && img.remove();
    }
  }

  function nextImage() {
    currentImg < images.length - 1 ? currentImg++ : (currentImg = 0);
    const img = lightbox.querySelector("img");
    img.src = images[currentImg].src;
  }

  function prevImage() {
    currentImg > 0 ? currentImg-- : (currentImg = images.length - 1);
    const img = lightbox.querySelector("img");
    img.src = images[currentImg].src;
  }

  //event listeners
  images && images.forEach((image, index) => showLightbox(image, index));
  lightbox && lightbox.addEventListener("click", hideLightbox);
  nextButton && nextButton.addEventListener("click", nextImage);
  prevButton && prevButton.addEventListener("click", prevImage);
}
