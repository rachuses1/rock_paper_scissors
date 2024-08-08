function getComputerChoice(max) {
    // generate a random number 0 1 and 2
    let computerChoice = Math.floor(Math.random() * max);
    // If the random number is 0, then return "Rock"
    if (computerChoice === 0) {
        return "rock";}
    else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
};

function playGame(humanSelection, computerSelection) {
    playRound(playerSelection,getComputerChoice(3));
}

const computerSelection = getComputerChoice(3);
let playerSelection;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const comment = document.querySelector('#results');


const assignRock = () => {
    playerSelection = 'rock';
    playGame();
};
const assignPaper = () => {
    playerSelection = 'paper';
    playGame();
};

const assignScissors = () => {
    playerSelection = 'scissors';
    playGame();
};

rock.addEventListener("click", assignRock);
paper.addEventListener("click", assignPaper);
scissors.addEventListener("click", assignScissors);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // humanChoice winning conditions    
    switch(true) {
        case (humanChoice === "paper" && computerChoice === "rock"):
            document.getElementById("results").textContent = `Computer chooses ${computerChoice}. You win! ${humanChoice} beats ${computerChoice}`;
            humanScore += 1;
            break;
        case (humanChoice === "scissors" && computerChoice === "paper"):
            document.getElementById("results").textContent = `Computer chooses ${computerChoice}. You win! ${humanChoice} beats ${computerChoice}`;
            humanScore += 1;
            break;        
        case (humanChoice === "rock" && computerChoice === "scissors"):
            document.getElementById("results").textContent = `Computer chooses ${computerChoice}. You win! ${humanChoice} beats ${computerChoice}`;
            humanScore += 1;
            break;
        
    // computer winning conditions
        case (humanChoice === "paper" && computerChoice === "scissors"):
            document.getElementById("results").textContent = `Computer chooses ${computerChoice}. You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore += 1;
            break;
        
        case (humanChoice === "scissors" && computerChoice === "rock"):
            document.getElementById("results").textContent = `Computer chooses ${computerChoice}. You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore += 1;
            break;

        case (humanChoice === "rock" && computerChoice === "paper"):
            document.getElementById("results").textContent = `Computer chooses ${computerChoice}. You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore += 1;
            break;
        
    // tie conditions
    // humanChoice = computerSelection
        case (humanChoice === computerChoice):
            document.getElementById("results").textContent = `Computer chooses ${computerChoice}. You tie!`;
            break;

    }
}