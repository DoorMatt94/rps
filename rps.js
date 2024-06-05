function getHumanChoice() {
    let humanChoice = String(prompt("What do you choose?")).toLowerCase();
    return humanChoice;
}

function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"];
    let a = Math.floor(Math.random() * 3);
    return computerChoice[a];
}

    let humanScore = 0;
    let computerScore = 0;



function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    }
    else if (computerChoice == "rock" && humanChoice == "scissors"
          || computerChoice == "scissors" && humanChoice == "paper"
          || computerChoice == "paper" && humanChoice == "rock") {
        console.log("You lose!");
        return computerScore++;
    }
    else {
        console.log("You win!");
        return humanScore++;
    }
}


function playGame() {

    for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    }
    console.log("Human score: " + humanScore)
    console.log("Computer score: " + computerScore)
}


playGame();


