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
// function scrollHover() {
//   var styleElement = document.createElement("style");
//   styleElement.appendChild(
//     document.createTextNode("body::-webkit-scrollbar: {width:20px}")
//   );
//   document.getElementsByTagName("head")[0].appendChild(styleElement);
// }

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
  if (screen.width >= 600) {
    cursor1.style.opacity = cursor2.style.opacity = 1;
  }
}
function mouseOut() {
  if (screen.width >= 600) {
    cursor1.style.opacity = cursor2.style.opacity = 0;
    cursor1.style.display = cursor2.style.display = "none";
  }
}
// exta mouse event lisenter
if (screen.width <= 600) {
  document.addEventListener("mouseover", () => {
    cursor1.style.display = "block";
  });
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

let checkBox = document.querySelector(".checkbox");
let navBar = document.querySelector(".nav-bar-item");
let background = document.querySelector(".nav-bar-helper");
function checkIn() {
  if (checkBox.checked == !true) {
    navBar.style.cssText = "transition-delay:0.8s;transform:translate(0%);";
    background.style.cssText = " background-position:left;";
  } else if (checkBox.checked == !false) {
    navBar.style.cssText = "transition-delay:0s;transformtranslateY(-150%);";
    background.style.cssText =
      " transition-delay:0.8s;background-position: right;";
  }
}

// footer onclick
let shop = 0;
let about = 0;
let contact = 0;
let content = 0;

function footer(id) {
  if (screen.width <= 500) {
    let footerDisplay = document.querySelector(".footer-" + id + " div");

    if (shop == 0) {
      footerDisplay.style.cssText = "block";
      shop = 1;
    } else if (shop == 1) {
      footerDisplay.style.display = "none";
      shop = 0;
    }
    if (about == 0) {
      footerDisplay.style.display = "block";
      about = 1;
    } else if (about == 1) {
      footerDisplay.style.display = "none";
      about = 0;
    }
    if (contact == 0) {
      footerDisplay.style.display = "block";
      contact = 1;
    } else if (contact == 1) {
      footerDisplay.style.display = "none";
      contact = 0;
    }
    if (content == 0) {
      footerDisplay.style.display = "block";
      content = 1;
    } else if (content == 1) {
      footerDisplay.style.display = "none";
      content = 0;
    }
  }
}
