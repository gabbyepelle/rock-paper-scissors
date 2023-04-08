let playerScore = 0;
let computerScore = 0;
const pics = {
  "rock": "images/stone-576566_640.png",
  "paper": "images/postit-3265087_640.png",
  "scissors": "images/scissor-2337264_640.png"
}
const display = document.querySelector(".display-img")
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resetButton = document.querySelector("#reset");
const pScoreDisplay = document.querySelector("#player-score");
const cScoreDisplay = document.querySelector("#computer-score");
const div = document.querySelector(".winner-display");
const p = document.createElement("p");
div.appendChild(p);
const winner = document.createElement("p");
div.appendChild(winner);

p.classList.add("game-text");
winner.classList.add("game-text");

//create images
const playerDisplay = document.createElement('img')
const computerDisplay = document.createElement('img')




//add event listener to each button that records the player's choice
rockButton.addEventListener("click", function () {
  const computerSelection = getComputerChoice();
  playRound("rock", computerSelection);
});

paperButton.addEventListener("click", function () {
  const computerSelection = getComputerChoice();
  playRound("paper", computerSelection);
});

scissorsButton.addEventListener("click", function () {
  const computerSelection = getComputerChoice();
  playRound("scissors", computerSelection);
});

resetButton.addEventListener("click", function () {
  playerScore = 0;
  computerScore = 0;
  p.textContent = "";
  winner.textContent = "";
  pScoreDisplay.innerText = playerScore;
  cScoreDisplay.innerText = computerScore;
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
  computerDisplay.setAttribute('src', '');
  playerDisplay.setAttribute('src', '');

});

function getComputerChoice() {
  //return random computer choice
  const choice = ["rock", "paper", "scissors"];
  let selection = Math.floor(Math.random() * 3);
  return choice[selection];
}

function playRound(playerSelection, computerSelection) {
  
  if (playerSelection === computerSelection) {
    p.textContent = "It's a tie!";
  } else if (playerSelection === "rock" &&               computerSelection == "paper") {
    computerScore += 1;
    p.textContent = "You lose! Paper beats rock!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1;
    p.textContent = "You win! Rock beats scissors!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore += 1;
    p.textContent = "You win! Paper beats rock!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
    p.textContent = "You lose! Scissors beats paper!";
  } else if (playerSelection === "scissors" && computerSelection == "paper") {
    playerScore += 1;
    p.textContent = "You win! Scissors beats paper!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1;
    p.textContent = "You lose! Rock beats scissors!";
  }
  pScoreDisplay.innerText = playerScore;
  cScoreDisplay.innerText = computerScore;
  displayChoice(playerSelection, computerSelection)
  game();
}

function game() {
  if (playerScore === 5) {
    winner.textContent = "You win!";
  } else if (computerScore === 5) {
    winner.textContent = "You Lose!";
  }
  if (playerScore === 5 || computerScore === 5) {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
}

function displayChoice(player, computer){
  

playerDisplay.setAttribute('src', pics[player]);
playerDisplay.setAttribute('id', 'player')
playerDisplay.classList.add('display')
computerDisplay.classList.add('display')
computerDisplay.setAttribute('src', pics[computer]);
computerDisplay.setAttribute('id', 'computer')
display.appendChild(playerDisplay)
display.appendChild(computerDisplay)

}


