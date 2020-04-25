let toPosition = 0;
const scrollBtn = document.querySelector(".scroll-btn");
window.addEventListener("scroll", () => {
  if (window.pageYOffset >= document.documentElement.clientHeight / 2) {
    scrollBtn.style.display = "initial";
    scrollBtn.innerHTML = "&#11014;";
    toPosition = 0;
  } else {
    if (toPosition) {
      scrollBtn.style.display = "initial";
      scrollBtn.innerHTML = "&#9875;";
    } else {
      scrollBtn.style.display = "none";
    }
  }
});

scrollBtn.addEventListener("click", () => {
  if (!toPosition) {
    let currentPosition = window.pageYOffset;
    console.log(currentPosition);
    window.scrollTo(0, toPosition);
    toPosition = currentPosition;
  } else {
    window.scrollTo(0, toPosition);
    toPosition = 0;
  }
});
