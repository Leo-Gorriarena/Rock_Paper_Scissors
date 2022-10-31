

const getComputerChoice = function () {
  let computerChoice;
  let random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) {
    computerChoice = "rock";
  } else if (random === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
};

const playRound = function (playerSelection, computerSelection) {
  let humanPlayer = playerSelection.toLowerCase();

  if (humanPlayer === "rock" && computerSelection === "scissors") {
    console.log("You Win! Rock beats Scissors");
    return 1;
  } else if (humanPlayer === "paper" && computerSelection === "rock") {
    console.log("You Win! Paper beats Rock");
    return 1;
  } else if (humanPlayer === "scissors" && computerSelection === "paper") {
    console.log("You Win! Scissors beats Paper");
    return 1;
  } else if (humanPlayer === computerSelection) {
    console.log(
      `It's a Tie! ${computerSelection.toUpperCase()} === ${humanPlayer.toUpperCase()}`
    );
    return 0;
  } else {
    console.log(
      `You Lose! ${computerSelection.toUpperCase()} beat ${humanPlayer.toUpperCase()}`
    );
    return 2;
  }
};

/* Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. */

const game = function () {
  let roundResult;
  let humanScore = 0;
  let computerScore = 0;
  let humanChoice;

  for (let i = 0; i < 5; i++) {
    humanChoice = prompt(
      `ROUND ${i+1}:
      Choose your weapon: Rock | Paper | Scissors`
    ).toLowerCase();

    roundResult = playRound(humanChoice, getComputerChoice());

    if (roundResult === 1) {
      humanScore++;
    } else if (roundResult === 2) {
      computerScore++;
    }
  }

  if (humanScore === computerScore) {
    console.log("It is a tie!!!");
  } else if (humanScore > computerScore) {
    console.log(`You Win!!! ${humanScore}-${computerScore}`);
  } else {
    console.log(`COMPUTER WINS!!! ${computerScore}-${humanScore}`);
  }
};

game();
