"use strict";

// Implementing Game logic

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log((document.querySelector(".number").textContent = secretNumber));
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // When there is no Guess
  if (!guess) {
    displayMessage(`⛔ No Number!`);
    document.querySelector(".score").textContent = Number(value--);
  }
  // When Guessed Number is Correct (When player Wins!)
  else if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number!`);

    document.querySelector("body").style.backgroundColor = `#60b347`;
    document.querySelector(".number").style.width = `30rem`;

    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  // When Guessed Number is Wrong !
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📈 Too High!" : `📉 Too Low!`;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = `💥 You lost the Game!`;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;

  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
