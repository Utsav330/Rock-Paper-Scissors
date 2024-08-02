const choices = ["rock", "paper", "scissors"];
let playerDisplay = document.getElementById("playerDisplay");
let computerDisplay = document.getElementById("computerDisplay");
let resultDisplay = document.getElementById("resultDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result;

    if (playerChoice === computerChoice) {
        result = "It's a Tie!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You Win!" : "You Lose!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You Win!" : "You Lose!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You Win!" : "You Lose!";
                break;
        }
    }
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch (result) {
        case "You Win!":
            resultDisplay.classList.add("greenText");
            playerScore++; 
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You Lose!":
            resultDisplay.classList.add("redText");
            computerScore++; 
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}