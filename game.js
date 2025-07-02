const btns = document.querySelectorAll(".game-btn");
const compChoiceOutput = document.querySelector(".comp-choice");
const userChoiceOutput = document.querySelector(".user-choice");
const resultOutput = document.querySelector(".result");
const userScoreOutput = document.querySelector(".user-score");
const compScoreOutput = document.querySelector(".comp-score");
const winnerOutput = document.querySelector(".winner");
const resetBtn = document.querySelector(".reset");
resetBtn.style.visibility = "hidden";
let userScore = 0;
let computerScore = 0;


const choice = ["rock", "paper" , "scissors"];

  btns.forEach( btn => {
  btn.addEventListener("click" , () => {
    console.log(btn.id);
    


let compChoice =  choice[Math.floor(Math.random()*3)];  // it generates random number from 0 to 2

let userChoice = btn.id;


compChoiceOutput.textContent = `Computer selected ${compChoice}`;
userChoiceOutput.textContent = `User selected ${userChoice}`;

const playRound = (compChoice ,  userChoice) => {
console.log(`user choice = ${userChoice} \n computer choice = ${compChoice}`)
    if (compChoice !== userChoice){

    if ((compChoice === "rock" && userChoice === "scissors" ) ||
        (compChoice === "paper" && userChoice ==="rock") ||
        (compChoice === "scissors" && userChoice === "paper"))
    {
        
        resultOutput.textContent = `Computer's ${compChoice} beats your ${userChoice}` 
        computerScore++;

    } else if   ((userChoice === "rock" && compChoice === "scissors" ) ||
                (userChoice === "paper" && compChoice ==="rock") ||
                (userChoice === "scissors" && compChoice === "paper"))
                {
                resultOutput.textContent = `Your ${userChoice} beats computer's ${compChoice}`    
                
            userScore++;
        }
    
}
    else {
        resultOutput.textContent = `Its a draw.`
    }
    console.log(`user score = ${userScore} \n computer score ${computerScore}`)
    userScoreOutput.textContent = `User Score = ${userScore}`;
    compScoreOutput.textContent = `Computer Score = ${computerScore}`;
    
}


playRound ( compChoice , userChoice);

if(userScore === 5 || computerScore ===5){
if(computerScore>userScore){
   
    winnerOutput.textContent = `Computer won , better luck next time!`;
}
else if (computerScore === userScore){
    winnerOutput.textContent = ` Its a draw.`
    
}
else{
    winnerOutput.textContent = ` Congrats you won!!! `;
    

};

btns.forEach(btn => btn.disabled = true);
resetBtn.style.visibility = "visible";

resetBtn.addEventListener("click" , () => {
    location.reload();
})


// setTimeout(()=>{
// location.reload()
// },3000);
}

})
})