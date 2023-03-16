"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
const numberBox = document.querySelector(".number");
const message = document.querySelector(".message");
const scoreDetect = document.querySelector(".score");
const highScore = document.querySelector(".high-score");
const guessValue = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const resetBtn = document.querySelector(".reset");

const checkBtnLogic = function () {
  const guess = Number(guessValue.value);
  if (!guess) {
    message.textContent = "⛔ Please Set a number";
  } else if (guess < 1 || guess > 20) {
    message.textContent = "🤦‍♂️ Please Choose between 1 & 20 ";
  } else if (guess === secretNumber) {
    document.querySelector(".header--title").textContent =
      "🏄‍♂️Ayeee You wiiin Pal🏄‍♂️";
    message.textContent = "🥳 Yaaay! Correct Number";
    document.querySelector("body").style.backgroundImage =
      "linear-gradient(145deg, #47a044, #0c9400)";
    numberBox.textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      highScore.textContent = highscore;
    }
  } else {
    if (score > 0) {
      score--;
      if (guess > secretNumber) {
        message.textContent = "📈 Too High";
      } else if (guess < secretNumber) {
        message.textContent = "📉 Too Low";
      }
      scoreDetect.textContent = score;
    } else if (score === 0) {
      document.querySelector(".header--title").textContent =
        "😭Try Again It's not very hard😭";
      message.textContent = `😥 You Loose`;
      document.querySelector("body").style.backgroundImage =
        "linear-gradient(145deg, #ce5000, #ff0000)";
    }
  }
};

const againBtnLogic = function () {
  numberBox.textContent = "?";
  message.textContent = "Start guessing...";
  document.querySelector(".header--title").textContent =
    "Guess The Number Dude!";
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  scoreDetect.textContent = score;
  guessValue.value = "";
  document.querySelector("body").style.backgroundImage =
    "linear-gradient(145deg, #0c0c0c, #2c2c2c)";
};

checkBtn.addEventListener("click", checkBtnLogic);
resetBtn.addEventListener("click", againBtnLogic);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkBtnLogic();
  }
});
