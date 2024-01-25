console.log("hello");

const btn = document.querySelector(".share-btn");
const share = document.querySelector(".button-opened");

btn.addEventListener("click", (event) => {
  share.classList.toggle("hidden");
});
