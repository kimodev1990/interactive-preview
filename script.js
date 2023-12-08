let introContainer = document.querySelector(".main-container");
let subContainer = document.querySelector(".sub-container");
let allButton = document.querySelectorAll(".btn");
let rating = document.getElementById("rate");
let clickSubmit = document.querySelector(".submit");

clickSubmit.addEventListener("click", () => {
  subContainer.classList.remove("hidden");
});

allButton.forEach((numbRate) => {
  numbRate.addEventListener("click", () => {
    rating.innerText = numbRate.innerText;
  });
});
