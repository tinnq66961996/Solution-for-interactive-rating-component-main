"use strict";
const container = document.querySelector(".container");
const thankYou = document.querySelector(".thank-you");
const submitBtn = document.querySelector(".submit-btn");
const rateAgain = document.querySelector(".rate-btn");
const ratingButtons = document.querySelectorAll(".rating-btn");
const rateScore = document.getElementById("rating");

submitBtn.addEventListener("click", function () {
    thankYou.classList.remove("hidden");
    container.classList.add("hidden");
});

rateAgain.addEventListener("click", function () {
    thankYou.classList.add("hidden");
    container.classList.remove("hidden");
});

ratingButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        rating.textContent = " " + button.textContent.trim() + " ";
    });
});
