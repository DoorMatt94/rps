function getHumanChoice() {
    let humanChoice = String(prompt("What do you choose?")).toLowerCase();
    return humanChoice;
}

function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"];
    let a = Math.floor(Math.random() * 3);
    return computerChoice[a];
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return console.log("It's a tie!")}
    else if (computerChoice == "rock" && humanChoice == "scissors"
          || computerChoice == "scissors" && humanChoice == "paper"
          || computerChoice == "paper" && humanChoice == "rock") {
        return  console.log("You lose!"), computerScore++ }
    else {
        return console.log("You win!"), humanScore++ }
}
playRound(humanSelection, computerSelection);
}

playGame();


