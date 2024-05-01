const images = document.querySelector(".image-wrapper");
const imageCount = document.querySelectorAll(".image-slider-item").length;
let ic = 0;
setInterval(() => {
  images.style.transform = `translateX(-${ic}px)`;
  ic += 400 * (imageCount - 1);
  if (ic > 400 * (imageCount - 1)) {
    ic = 0;
  }
  console.log(imageCount);
}, 1500);
