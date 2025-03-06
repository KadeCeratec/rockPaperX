// geet een random nummer tussen 0 en 3
//die dan om gezet worden in rock paper of X
function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    
    if(num == 0 ){
        return "rock"
    }else if (num == 1) {
       return "paper" 
    }else if(num == 2) {
       return "scissors" 
    }
}


//  fucntion om mensen keuze te weer geven
function getHumanChoice() {
 
    let choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase()
    return choice;
}


// deze variablen houden de score bij
let humanScore = 0;
let computerScore = 0;

// kijkt wie er gewonnen heeft and past de score aan
function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock"){
        if (computerChoice == "scissors"){
            console.log("You won this one!")
            humanScore++
        } else{
            console.log("You lost this one.")
            computerScore++
        }
    }
    if (humanChoice == "scissors"){
        if (computerChoice == "paper"){
            console.log("You won this one!")
            humanScore++
        } else{
            console.log("You lost this one.")
            computerScore++
        }
    }
    if (humanChoice == "paper"){
        if (computerChoice == "rock"){
            console.log("You won this one!")
            humanScore++
        } else{
            console.log("You lost this one.")
            computerScore++
        }
    }

}
// zet de function humain and computer choice in variables.
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// zorgt er voor dat het spel 5 rondes me gaat en dan stopt.
function playGame(){
    for(let i=0; i<5; i++){
        console.log(playRound(getHumanChoice(), getComputerChoice()))
    }
    console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
}

playGame();
