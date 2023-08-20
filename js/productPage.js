const imgBig = document.querySelector("[data-big]");
const imgSmallAll = document.querySelectorAll("[data-small] img");
const imgSmall = document.querySelector("[data-small]");
imgSmallAll.forEach((small) => {
  small.addEventListener("click", () => {
    const imgSmallActive = document.querySelector("[data-small] [data-active]");
    const imgBigActive = document.querySelector("[data-big] [data-active]");
    index = [...imgSmall.children].indexOf(small);
    if (small != imgSmallActive) {
      small.dataset.active = true;
      delete imgSmallActive.dataset.active;
      //big img

      imgBig.children[index].dataset.active = true;
      delete imgBigActive.dataset.active;
    }
  });
});

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
