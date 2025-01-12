// Get all images for the player's choices
let images = [...document.querySelectorAll(".img-container img")];

// Define choices for the game
const choices = ["rock", "paper", "scissors"];

// Function to generate computer's random choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a Tie!";
    }
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        return "You Win!";
    }
    return "Computer Wins!";
}

// Update scores in the HTML
function updateScores(playerScore, computerScore) {
    document.querySelector(".your-result").textContent = `Your Score: ${playerScore}`;
    document.querySelector(".comp-result").textContent = `Computer Score: ${computerScore}`;
}

// Main game logic
let playerScore = 0;
let computerScore = 0;

images.forEach((image, index) => {
    image.addEventListener("click", () => {
        // Get the player's choice
        const playerChoice = choices[index];

        // Get the computer's choice
        const computerChoice = getComputerChoice();

        // Determine the winner
        const result = determineWinner(playerChoice, computerChoice);

        // Update scores based on the result
        if (result === "You Win!") {
            playerScore++;
        } else if (result === "Computer Wins!") {
            computerScore++;
        }

        // Display the result
        document.querySelector(".output p").textContent = `You chose: ${playerChoice} | Computer chose: ${computerChoice} | ${result}`;

        // Update the scores on the screen
        updateScores(playerScore, computerScore);
    });
});
