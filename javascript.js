console.log("Hello World");

function getComputerChoice(max) {

    // generate a random number 0 1 and 2
    let choice = Math.floor(Math.random() * max);
    console.log(choice);
    // If the random number is 0, then return "Rock"
    if (choice === 0) {
        return "Rock";}

    else if (choice === 1) {
        return "Paper";
    } 
    
    else {
        return "Scissors";
    }
};

console.log(getComputerChoice(3));

