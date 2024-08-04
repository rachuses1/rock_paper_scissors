function getComputerChoice(max) {

    // generate a random number 0 1 and 2
    let computerChoice = Math.floor(Math.random() * max);
    console.log(computerChoice);

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

// ------------------------------------------------------------------ //

// create prompt to get input // 
function getHumanChoice() {
    let humanChoice = prompt("Heya what do you choose?","");
    console.log(`HumanChoice is ${humanChoice}`);
}

// function playRound(humanChoice,computerSelection) {
//     humanChoice = humanSelection.toLowerCase();
//     // humanChoice winning conditions
//     // humanChoice = paper computerSelection = rock
//     // humanChoice = scissors computerSelection = paper
//     // humanChoice = rock computerSelection = scissors 

//     switch(true) {
//         case (humanChoice === "paper" && computerSelection === "rock"):
//             console.log(`You win! ${humanSelection} beats ${computerSelection}`);
//             break;
//         case (humanChoice === "scissors" && computerSelection === "paper"):
//             console.log(`You win! ${humanSelection} beats ${computerSelection}`);
//             break;        
//         case (humanChoice === "rock" && computerSelection === "scissors"):
//             console.log(`You win! ${humanSelection} beats ${computerSelection}`);
//             break;
        
//     // computer winning conditions
//     // humanChoice = paper computerSelection = scissors
//     // humanChoice = scissors computerSelection = rock
//     // humanChoice = rock computerSelection = paper
//         case (humanChoice === "paper" && computerSelection === "scissors"):
//             console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
//             break;
        
//         case (humanChoice === "scissors" && computerSelection === "rock"):
//             console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
//             break;

//         case (humanChoice === "rock" && computerSelection === "paper"):
//             console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
//             break;
        
//     // tie conditions
//     // humanChoice = computerSelection
//         case (humanChoice === computerSelection):
//             console.log(`You tie!`);
//             break;
//     }
// }

// // ------------------------------------------------------------//
// //Score Keeping //
// let humanScore = 0;
// let computerScore = 0;


//------------------------------------------------------------//
// Call the functions //
console.log("Computer Choice is",getComputerChoice(3));
getHumanChoice()
