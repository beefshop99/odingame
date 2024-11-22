
function getComputerChoice() {
    let result = Math.floor((Math.random() * 3) + 1);
    console.log(result)

        if (result === 1) 
            play = "rock"; 
         else if (result === 2) 
            play = "scissors"; 
         else 
            play = "paper";

    return play;
}

console.log(getComputerChoice())



function getHumanChoice() {
  let a = prompt("Rock, paper or scissors?");
  let b = a.toLowerCase();
    return b; 
}

console.log(getHumanChoice())