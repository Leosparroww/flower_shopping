const slides = document.querySelector("[data-slides]");
const pin = document.querySelector("[data-button]");
var timer = setInterval(carousel, 10000);
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
    timer = setInterval(carousel, 8000);
  });
});

//price range

const rangeInput = document.querySelectorAll(".range-input input");
const progress = document.querySelector(".price-slider .progress");
const priceInput = document.querySelectorAll(".price-input input");
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    //get two value of price input to number
    let minVal = parseInt(priceInput[0].value);
    let maxVal = parseInt(priceInput[1].value);
    maxVal > 10000 ? (maxVal = 10000) : "";
    if (maxVal - minVal >= priceGap) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minVal;
        progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      } else if (e.target.className === "input-max") {
        rangeInput[1].value = maxVal;
        progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    //get two value of range input to number
    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      // if else for slider
      if (e.target.className == "max-range") {
        rangeInput[1].value = minVal + priceGap;
      } else if (e.target.className == "min-range") {
        rangeInput[0].value = maxVal - priceGap;
      }
    } else {
      //progress bar
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

// for view box
const viewBox = document.querySelectorAll("[data-view-box] div");
const viewBox1 = document.querySelector("[data-view-box]");
viewBox.forEach((view) => {
  view.addEventListener("click", () => {
    activeViewBox = viewBox1.querySelector("[data-active]");
    if (view != activeViewBox) {
      delete activeViewBox.dataset.active;
    }
    view.dataset.active = true;

    //css grid change
    // boxIndex = [...viewindex.children];
    index = [...viewBox1.children].indexOf(view);
    productList = document.querySelector(".product-list");

    if (index == 0) {
      productList.style.cssText =
        "grid-template-columns:repeat(1, minmax(auto, 1fr));";
      document.querySelector(".product-list").dataset.box = true;
    } else if (index == 1) {
      productList.style.cssText =
        "grid-template-columns:repeat(2, minmax(auto, 1fr));";
      delete document.querySelector(".product-list").dataset.box;
    } else if (index == 2) {
      productList.style.cssText =
        "grid-template-columns:repeat(3, minmax(auto, 1fr));";
      delete document.querySelector(".product-list").dataset.box;
    } else if (index == 3) {
      productList.style.cssText =
        "grid-template-columns:repeat(4, minmax(auto, 1fr));";
      delete document.querySelector(".product-list").dataset.box;
    }
  });
});

// for quick view

const quickView = document.querySelector(".quick-cross");
const quickView1 = document.querySelectorAll(".quick-view");
quickView.addEventListener("click", () => {
  document.querySelector(".product-quick-view").style.display = "none";
});
quickView1.forEach((view1) => {
  view1.addEventListener("click", () => {
    document.querySelector(".product-quick-view").style.display = "grid";
  });
});

//sidebar
const navBarMenu = document.querySelector(".nav-bar-menu");
const scrollBarCross = document.querySelector(".category-btn");
const categoryParent = document.querySelector(".category-parent");
navBarMenu.addEventListener("click", () => {
  categoryParent.style.cssText =
    "display:grid;transform:translate(0%);transform-origin:left;pointer-events:auto;";
  document.body.style.cssText = "overflow:hidden;pointer-events:none;";
});
scrollBarCross.addEventListener("click", () => {
  categoryParent.style.cssText = "transform:translate(-100%);";
  document.body.style.cssText = "overflow:auto;pointer-events:auto;";
});
// when scrolling side bar diable home scroll

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
