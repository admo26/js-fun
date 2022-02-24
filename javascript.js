
const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let computerSelection = computerPlay();
    console.log(playRound(button.id, computerSelection));
    if (playerScore === 5) {
      alert("You win!");
      reset();
    } else if (computerScore === 5) {
      alert("You lose!")
      reset();
    };
  });
});

function reset(){
  playerScore = 0;
  computerScore = 0;
  keepPlayerScore();
  keepCpuScore();
}

function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * options.length);

  return options[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  console.log("You chose: " + playerSelection);
  console.log("Computer chose: " + computerSelection);
  if (playerSelection === computerSelection) {
    return "You draw! Try again";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore = ++playerScore;
    keepPlayerScore();
    return "You Win!";
  } else {
    computerScore = ++computerScore;
    keepCpuScore();
    return "You Lose!";
  }
}

function keepPlayerScore() {
  let playerScoreBox = document.querySelector("#player-score");
  playerScoreBox.textContent = playerScore;
}
function keepCpuScore() {
  let computerScoreBox = document.querySelector("#computer-score");

  computerScoreBox.textContent = computerScore;
}