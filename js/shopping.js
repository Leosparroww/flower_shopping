const slides = document.querySelector("[data-slides]");
const pin = document.querySelector("[data-button]");
var timer = setInterval(carousel, 5000);
function carousel(offset) {
  const activeSlide = slides.querySelector("[data-active]");
  const activeSlide2 = pin.querySelector("[data-active]");
  let newIndex = [...slides.children].indexOf(activeSlide);
  (offset == undefined) | null ? (offset = 1) : (offset = offset);
  newIndex = newIndex + offset;
  if (newIndex < 0) {
    newIndex = slides.children.length - 1;
  } else if (newIndex >= slides.children.length) {
    newIndex = 0;
  }
  slides.children[newIndex].dataset.active = true;
  pin.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;
  delete activeSlide2.dataset.active;
}
const buttons = document.querySelectorAll("[data-slide-button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.slideButton === "next" ? 1 : -1;
    carousel(offset);
    clearInterval(timer);
    timer = setInterval(carousel, 5000);
  });
});
