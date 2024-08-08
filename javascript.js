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




const computerSelection = getComputerChoice(3);
let playerSelection;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const comment = document.querySelector('#results');
const reset = document.querySelector('#reset');
const score = document.querySelector('#score');

let humanScore = 0;
let computerScore = 0;

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
reset.addEventListener("click",() => {
    humanScore = 0;
    computerScore = 0;
    document.getElementById("results").textContent = '';
    document.getElementById("score").textContent = `Score is Computer: ${computerScore} Player: ${humanScore}`;
})



function playRound(humanChoice, computerChoice) {
    // humanChoice winning conditions
    
    function humanWins() {
        if(humanScore === 5) {
            document.getElementById("results").textContent = `Finito, Human wins!`;
        }
    };

    function computerWins() {
        if (computerScore === 5) {
            document.getElementById("results").textContent = `Finito, Computer wins!`;
        }
    }
    
    switch(true) {
        case (humanScore === 5):
            humanWins();
            break;
        case (computerScore === 5):
            computerWins();
            break;

        case (humanChoice === "paper" && computerChoice === "rock"):
            document.getElementById("results").textContent = `Computer chooses ${computerChoice}. 
            You win! ${humanChoice} beats ${computerChoice}`;
            humanScore += 1;
            humanWins();
            break;
        case (humanChoice === "scissors" && computerChoice === "paper"):
            document.getElementById("results").textContent = `Computer chooses ${computerChoice}. 
            You win! ${humanChoice} beats ${computerChoice}`;
            humanScore += 1;
            humanWins();
            break;        
        case (humanChoice === "rock" && computerChoice === "scissors"):
            document.getElementById("results").textContent = `Computer chooses ${computerChoice}. 
            You win! ${humanChoice} beats ${computerChoice}`;
            humanScore += 1;
            humanWins();
            break;
        
    // computer winning conditions
        case (humanChoice === "paper" && computerChoice === "scissors"):
            document.getElementById("results").textContent = `Computer chooses ${computerChoice}. 
            You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore += 1;
            computerWins();
            break;
        
        case (humanChoice === "scissors" && computerChoice === "rock"):
            document.getElementById("results").textContent = `Computer chooses ${computerChoice}. 
            You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore += 1;
            computerWins();
            break;

        case (humanChoice === "rock" && computerChoice === "paper"):
            document.getElementById("results").textContent = `Computer chooses ${computerChoice}. 
            You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore += 1;
            computerWins();
            break;
        
    // tie conditions: humanChoice = computerSelection
        case (humanChoice === computerChoice):
            document.getElementById("results").textContent = `Computer chooses ${computerChoice}. 
            You tie!`;
            computerWins();
            break;
            
    } 
    document.getElementById("score").textContent = `Score is Computer: ${computerScore} Player: ${humanScore}`;
}

function playGame(humanSelection, computerSelection) {
        playRound(playerSelection,getComputerChoice(3));
}