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

// ------------------------------------------------------------//


function getHumanChoice() {
    let humanChoice = prompt("Heya rock, paper, scissors?","");
    return humanChoice;
} 

//const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(3);

//Score Keeping //
let humanScore = 0;
let computerScore = 0;

let i=0;
function playGame(humanSelection, computerSelection) {
if (i<5) {
    playRound(getHumanChoice(),getComputerChoice(3));
    i+=1;
    playGame();
} else {
    return "end";
}

function playRound(humanChoice, computerChoice) {
// Step 1 - generate computer choice
console.log("Computer:",computerChoice);

// Step 2 - create prompt to get input // 
//getHumanChoice();
humanChoice = humanChoice.toLowerCase();
// Step 3 - determine who will win // 

    // humanChoice winning conditions    
    switch(true) {
        case (humanChoice === "paper" && computerChoice === "rock"):
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore += 1;
            break;
        case (humanChoice === "scissors" && computerChoice === "paper"):
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore += 1;
            break;        
        case (humanChoice === "rock" && computerChoice === "scissors"):
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore += 1;
            break;
        
    // computer winning conditions
        case (humanChoice === "paper" && computerChoice === "scissors"):
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore += 1;
            break;
        
        case (humanChoice === "scissors" && computerChoice === "rock"):
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore += 1;
            break;

        case (humanChoice === "rock" && computerChoice === "paper"):
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore += 1;
            break;
        
    // tie conditions
    // humanChoice = computerSelection
        case (humanChoice === computerChoice):
            console.log(`You tie!`);
            break;
        }
    // announce the result //
    console.log(`Your score is ${humanScore}, Computer ${computerScore}`);
    }
}
//------------------------------------------------------------//

playGame();


