

const choice = ["rock", "paper" , "scissors"];

const getComputerChoice= () => {
    let randNum =  Math.floor(Math.random()*3);  // it generates random number from 0 to 2
    return choice[randNum];

} 
const getUserChoice = () => {
  
    let userChoice = prompt("Rock ,  Paper or scissors?").toLowerCase();
    return userChoice ;
}
let userScore = 0;
let computerScore = 0;
const playRound = (compChoice ,  userChoice) => {
console.log(`user choice = ${userChoice} \n computer choice = ${compChoice}`)
    if (compChoice !== userChoice){

    if ((compChoice === "rock" && userChoice === "scissors" ) ||
        (compChoice === "paper" && userChoice ==="rock") ||
        (compChoice === "scissors" && userChoice === "paper"))
    {
        console.log(`Computer's ${compChoice} beats your ${userChoice}`)
        computerScore++;
    } else if   ((userChoice === "rock" && compChoice === "scissors" ) ||
                (userChoice === "paper" && compChoice ==="rock") ||
                (userChoice === "scissors" && compChoice === "paper"))
                {
                console.log(`Your ${userChoice} beats computer's ${compChoice}`)
            userScore++;
        }
    
}
    else {
        console.log("It's a draw");
    }
    console.log(`user score = ${userScore} \n computer score ${computerScore}`)
    
}

for(let i = 1 ; i <= 5 ;  i++){
    console.log(`\n--- Round ${i} ---`)
playRound ( getComputerChoice() , getUserChoice());

}
if(computerScore>userScore){
    console.log("Computer won , better luck next time!")
}
else if (computerScore === userScore){
    console.log("It's a Draw...")
}
else{
    console.log("Congrats you won!!!")

};