let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice:not(.computer)");
const msg = document.querySelector("#messege");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const compImg = document.querySelector("#computer-img");
const compBox = document.querySelector("#computer-box");
const compLabel = document.querySelector("#comp-label");

const genCompChoice = () => {
  const opt = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return opt[randomIdx];
};

const setComputerImage = (choice) => {
  compImg.src = `images/${choice}.png`;

  compBox.classList.remove("hide");
  compLabel.classList.remove("hide");
};

const drawGame = () => {
  msg.innerText = "Game Draw! Play again.";
  msg.style.background = "#64748b";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.background = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
    msg.style.background = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  setComputerImage(compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin;
    if (userChoice === "rock") {
      userWin = compChoice === "scissors";
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock";
    } else {
      userWin = compChoice === "paper";
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
