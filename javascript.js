


// function creates computer choice between rock, paper, scissors
function getComputerChoice() {
    let result = Math.floor((Math.random() * 3) + 1);

        if (result === 1) 
            play = "rock"; 
         else if (result === 2) 
            play = "scissors"; 
         else 
            play = "paper";

    console.log('Computer Selection:', play);
    return play;
   
}





//function receives user input between rock, paper, scissors. 
function getHumanChoice() {
  let a = prompt("Rock, paper or scissors?");
  let b = a.toLowerCase();
    console.log('Your Choice:', b); 
    return b;
}


// function to play the game

function playGame() {

let humanScore = 0
let computerScore = 0

//function plays a round, uses input from getHumanChoice and get ComputerChoice functions. 
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors")
        { return humanScore++, console.log("You win!"); }
    else if (humanChoice === "rock" && computerChoice === "paper")
        {return computerScore++, console.log("You Lose!"); }
    else if (humanChoice === "rock" && computerChoice === "rock" )
        { console.log("Stalemate!"); }
    else if (humanChoice === "scissors" && computerChoice === "paper")
        {return humanScore++, console.log("You win!"); }
   else if (humanChoice === "scissors" && computerChoice === "rock")
        { return computerScore++, console.log("You lose!"); }
    else if (humanChoice === "scissors" && computerChoice === "scissors")
        { console.log("Stalemate!"); }
    else if (humanChoice === "paper" && computerChoice === "rock")
        { return humanScore++, console.log("You win!"); }
    else if (humanChoice === "paper" && computerChoice === "scissors")
        { return computerScore++, console.log("You lose!"); }
    else if (humanChoice === "paper" && computerChoice === "paper")
        { console.log("Stalemate!"); }

  

}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection);
playRound(humanSelection, computerSelection);
playRound(humanSelection, computerSelection);
playRound(humanSelection, computerSelection);
playRound(humanSelection, computerSelection);

console.log('Human:' + humanScore);
console.log('Computer:' + computerScore);



}



playGame();