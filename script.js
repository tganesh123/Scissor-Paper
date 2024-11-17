let uScore = 0;
let cScore = 0;
const userScore = document.querySelector("#userScore");
const compScore = document.querySelector("#compScore");


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const genCompChoice = () => {
    let compChoices = ["rock", "paper", "scissor"];
    const randId = Math.floor(Math.random()*3);
    return compChoices[randId];
};
const displayWin = (userWin, userChoice, compChoice) => {
    if(userWin){
        uScore++;
        userScore.innerText = uScore;
        msg.innerText = `you win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{

       cScore++;
       compScore.innerText = cScore;

        msg.innerText = `you lost ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const drawGame = () => {
    console.log("game was draw");
     msg.innerText = "Game was Draw";
     msg.style.backgroundColor = "#081310";
}
const playGame = (userChoice) => {
    console.log("u chose", userChoice);
    const compChoice = genCompChoice();
    
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;

        }else if(userChoice === "rock"){
           userWin = compChoice === "paper" ? false : true;

        }else{
            userWin = compChoice ==="rock" ? true : false;
        }
        displayWin(userWin, userChoice, compChoice);
    }
    
};
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    });

});