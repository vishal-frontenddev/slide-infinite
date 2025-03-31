const brandSlider = document.getElementById("brandSlider");
const bndSliderClone = brandSlider.innerHTML;
brandSlider.innerHTML += bndSliderClone;

let brandPosition = 0;
const brandSpeed = 1; // Speed of the marquee

function animateBrandSlider() {
  brandPosition -= brandSpeed;
  if (brandPosition <= -brandSlider.scrollWidth / 2) {
    brandPosition = 0;
  }
  brandSlider.style.transform = `translateX(${brandPosition}px)`;
  requestAnimationFrame(animateBrandSlider);
}

animateBrandSlider();