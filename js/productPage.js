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
