let images = [...document.querySelectorAll(".img-container img")];
let choice = ["rock","paper","scissors"];

function getComputerChoice(){
    let randIdx = Math.floor(Math.random()*3);
    return choice[randIdx];
}

let playerScore = 0;
let computerScore = 0;

function determineWinner(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        return "It's a tie";
    }
    if((playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")){
        return "You win";
    }
    return "Computer wins";
}

function updateScores(playerScore, computerScore){
    document.querySelector(".your-result").textContent = `Your Score: ${playerScore}`;
    document.querySelector(".comp-result").textContent = `Comp Score: ${computerScore}`;
}

images.forEach((image, index) => {
    image.addEventListener("click", () => {
        const playerChoice = choice[index];
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);

        // Update scores based on result
        if (result === "You win") {
            playerScore++;
        } else if (result === "Computer wins") {
            computerScore++;
        }

        // Display result
        document.querySelector(".output p").textContent = `You chose: ${playerChoice} | Computer chose: ${computerChoice} | ${result}`;

        // Update scores on screen
        updateScores(playerScore, computerScore);
    });
});