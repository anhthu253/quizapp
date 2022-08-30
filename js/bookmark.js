const body = document.querySelector("body");
const bookmarkButton = document.querySelector('i[data-js="bookmark"]');
window.addEventListener("load", () => {
  bookmarkButton.classList.add("current");
  console.log("I am in bookmark");
});
