console.log("Hello World");

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

function getHumanChoice() {
    let humanChoice = prompt("Heya what do you choose?","");
    console.log(humanChoice);
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice) {
    humanChoice = humanChoice.toLowerCase();

}

console.log(getHumanChoice());
console.log(getComputerChoice(3));


