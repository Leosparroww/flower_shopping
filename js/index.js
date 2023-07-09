var lastScrollTop = 0;
let scrollHeight = document.documentElement.scrollHeight;
const scrolls = document.querySelector(".scroll-bar");
var timer = null;
window.addEventListener(
  "scroll",
  function () {
    var scroll = document.documentElement.scrollTop;
    var p = document.body.parentNode;
    //scroll percentage
    scrollPercent = (p.scrollTop / (p.scrollHeight - p.clientHeight)) * 100;
    scrolls.style.top = scrollPercent + "%";
    //scroll up and down validate
    if (scroll < lastScrollTop) {
      ScrollUp();
    } else if (scroll > lastScrollTop) {
      ScrollDown();
    }
    lastScrollTop = scroll <= 0 ? 0 : scroll;
  },
  false
);

// scroll behaviers, scroll stop detect function
function ScrollUp() {
  if (timer !== null) {
    clearTimeout(timer);
    scrolls.style.animation = "spinForward 2s linear infinite";
  }
  timer = setTimeout(function () {
    scrolls.style.animationPlayState = "paused";
  }, 100);
}
function ScrollDown() {
  if (timer !== null) {
    clearTimeout(timer);
    scrolls.style.animation = "spinBackward 2s linear infinite";
  }
  timer = setTimeout(function () {
    scrolls.style.animationPlayState = "paused";
  }, 100);
}

//scrollbar hover on display
function scrollHover() {
  var styleElement = document.createElement("style");
  styleElement.appendChild(
    document.createTextNode("body::-webkit-scrollbar: {width:20px}")
  );
  document.getElementsByTagName("head")[0].appendChild(styleElement);
}

// carousel

const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach((button) => {
  const slides = button
    .closest("[data-carousel")
    .querySelector("[data-slides]");
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const activeSlide = slides.querySelector("[data-active]");
    newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;
    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
    const text = button.closest("[data-carousel").querySelector("[data-text]");
    const activeText = text.querySelector("[data-active]");
    text.children[newIndex].dataset.active = true;
    delete activeText.dataset.active;
    progressBar(newIndex, (total = slides.children.length));
  });
  // progressBar
  const activeSlide = slides.querySelector("[data-active]");
  let newIndex = [...slides.children].indexOf(activeSlide);
  progressBar(newIndex, (total = slides.children.length));
});
function progressBar(newIndex) {
  let progress = ((newIndex + 1) / total) * 100;
  progress = progress.toFixed(0);
  document.querySelector(".progress div").style.width = progress + "%";
}
// cursor style
const cursor1 = document.querySelector(".cursor1");
const cursor2 = document.querySelector(".cursor2");
function mouseOver() {
  cursor1.style.display = cursor2.style.display = "block";
  cursor1.style.opacity = cursor2.style.opacity = 1;
}
function mouseOut() {
  cursor1.style.opacity = cursor2.style.opacity = 0;
  cursor1.style.display = cursor2.style.display = "none";
}
document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;
  cursor1.style.top = y + "px";
  cursor1.style.left = x + "px";

  cursor2.style.top = y + "px";
  cursor2.style.left = x + "px";
});
const imgprev = document.querySelector(".imgprev");
const imgnext = document.querySelector(".imgnext");
const imgfull = document.querySelector(".imgfull");
function nextBtn() {
  imgfull.style.display = "none";
  imgnext.style.display = "block";
  imgprev.style.display = "none";
}
function prevBtn() {
  imgfull.style.display = "none";
  imgprev.style.display = "block";
  imgnext.style.display = "none";
}

function fullBtn() {
  imgfull.style.display = "block";
  imgnext.style.display = "none";
  imgprev.style.display = "none";
}