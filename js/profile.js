const profileButton = document.querySelector('i[data-js="profile"]');
window.addEventListener("load", () => {
  profileButton.classList.add("current");
  console.log("I am in profile");
});
