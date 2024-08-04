function getComputerChoice(max) {

    // generate a random number 0 1 and 2
    let computerChoice = Math.floor(Math.random() * max);

    // If the random number is 0, then return "Rock"
    if (computerChoice === 0) {
        return "rock";}

    else if (computerChoice === 1) {
        return "paper";
    } 
    
    else {
        return "scissors";
    }
};
computerChoice = getComputerChoice(3);

// ------------------------------------------------------------------ //
// create prompt to get input // 
let humanChoice = prompt("Heya what do you choose?","");
console.log(`HumanChoice is ${humanChoice}`);

function playRound(humanChoice,computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    // humanChoice winning conditions
    // humanChoice = paper computerSelection = rock
    // humanChoice = scissors computerSelection = paper
    // humanChoice = rock computerSelection = scissors 

    switch(true) {
        case (humanChoice === "paper" && computerChoice === "rock"):
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            break;
        case (humanChoice === "scissors" && computerChoice === "paper"):
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            break;        
        case (humanChoice === "rock" && computerChoice === "scissors"):
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            break;
        
    // computer winning conditions
    // humanChoice = paper computerSelection = scissors
    // humanChoice = scissors computerSelection = rock
    // humanChoice = rock computerSelection = paper
        case (humanChoice === "paper" && computerChoice === "scissors"):
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            break;
        
        case (humanChoice === "scissors" && computerChoice === "rock"):
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            break;

        case (humanChoice === "rock" && computerChoice === "paper"):
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            break;
        
    // tie conditions
    // humanChoice = computerSelection
        case (humanChoice === computerChoice):
            console.log(`You tie!`);
            break;
    }
}

// // ------------------------------------------------------------//
// //Score Keeping //
// let humanScore = 0;
// let computerScore = 0;


//------------------------------------------------------------//
// Call the functions //
console.log("Computer Choice is",computerChoice);
console.log(humanChoice, computerChoice);

playRound(humanChoice,computerChoice);