function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;
const result = document.querySelector("#results")

function playRound(humanChoice, computerChoice) {
    result.className = ""; // reset previous class

    if (humanChoice === computerChoice) {
        result.classList.add("tie");
        result.innerHTML = "It's a tie! <br>" + `Human : ${humanScore} | Computer : ${computerScore}`;
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        result.classList.add("win");
        result.innerHTML = "You win! " + humanChoice + " beats " + computerChoice +
            `<br> Human : ${humanScore} | Computer : ${computerScore}`;
    } else {
        computerScore++;
        result.classList.add("lose");
        result.innerHTML = "You lose! " + computerChoice + " beats " + humanChoice +
            `<br> Human : ${humanScore} | Computer : ${computerScore}`;
    }
}



const choice = document.querySelector("#choices");



choice.addEventListener("click", (event) => {

    let target = event.target;

    switch (target.id){
        case "rock":
            playRound("rock", getComputerChoice());
            break
        case "paper":
            playRound("paper", getComputerChoice());
            break
        case "scissors":
            playRound("scissors", getComputerChoice());
            break
    }
    if (humanScore == 5 || computerScore == 5){
        if (humanScore == 5) {
            result.textContent = "CONGRATULATIONS YOU WIN"
        }
        if (computerScore == 5){
            result.textContent = "UNFORTUNATELY THE COMPUTER WINS"
        }
    
        humanScore = 0;
        computerScore = 0;
    }
})
