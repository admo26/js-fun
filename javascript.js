const playerSelection = prompt("What's your choice?");
const computerSelection = computerPlay();

function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * options.length);

  console.log(options[randomNumber]);

  return options[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "You draw! Try again";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
}

console.log("You chose: " + playerSelection);
console.log("Computer chose: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
