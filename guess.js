//VARIABLES
let randomnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// document.querySelector(".number").textContent = randomnumber;
// display secret number code
let highscore = 0;
//FUNCTIONS
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayScore = function (Score) {
  document.querySelector(".score").textContent = score;
};
document.querySelector(".highscore").textContent = highscore;
//CHECK BUTTON
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("You entered nothing 🙄 !!");
    document.querySelector(".message").style = "font-size: 23px;";
  } else if (guess === randomnumber) {
    displayMessage("okay..you passed that one! 😲🤐");
    document.querySelector(".message").style = "line-height:1.5;";
    document.querySelector("body").style = "background:#60b347;";
    document.querySelector(".number").textContent = randomnumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > randomnumber && guess - randomnumber >= 6) {
    displayMessage("TOO HIGH 😤💹📈");
    score -= 4;
    displayScore(score);
  } else if (guess > randomnumber && guess - randomnumber >= 3) {
    displayMessage("SO HIGH 😏💹📈");
    score -= 2;
    displayScore(score);
  } else if (guess > randomnumber) {
    displayMessage("HIGH 📈");
    score--;
    displayScore(score);
  } else if (guess < randomnumber && guess - randomnumber <= -7) {
    displayMessage("TOO LOW 😑📉📉");
    score -= 4;
    displayScore(score);
  } else if (guess < randomnumber && guess - randomnumber < -3) {
    displayMessage("SO LOW 😬📉");
    score -= 2;
    displayScore(score);
  } else if (guess < randomnumber) {
    score--;
    displayScore(score);
    displayMessage("LOW 📉");
  }
  if (score < 1) {
    score = 0;
    displayScore(score);
    displayMessage("YOU LOST!!😓");
  }
});
//RESET BUTTON
const reset = document.querySelector(".again");
reset.addEventListener("click", function () {
  randomnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  score = 20;
  displayScore(score);
  displayMessage("Start guessing...");
  document.querySelector("body").style = "background:#222;";
  document.querySelector(".number").textContent = "?";
});
