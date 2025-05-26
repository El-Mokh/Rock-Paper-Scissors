function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice(){
        let choice = Math.floor(Math.random() * 3);
        switch(choice){
            case 0:
                return "rock";
            case 1:
                return "paper";
            case 2:
                return "scissors";
        }
        
    }

    function getHumanChoice(){
        choice = prompt("Enter your choice (rock, paper, scissors): ").toLowerCase();
        while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
            choice = prompt("Invalid choice. Please enter rock, paper, or scissors: ").toLowerCase();
        }
        return choice
    }


    function playRound(humanChoice, computerChoice){
        if (humanChoice === computerChoice){
            console.log(" It's a tie!") ;
        }
        else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper") ) {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        }
        else{
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore++;
        }
    }

    function numberOfRounds() {
        rounds = parseInt(prompt("How many rounds would you like to play? (default is 5)"));
        if (isNaN(rounds) || rounds <= 0) {
            rounds = 5;
        }
        return rounds;
    }

    let num = numberOfRounds();

    for (let i = 0; i < num; i++){
        console.log("Round " + (i + 1));
        console.log("Human Score: " + humanScore + ", Computer Score: " + computerScore);
        console.log("=================================");
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(computerChoice);
        playRound(humanChoice, computerChoice);
    }
    console.log("###################################");
    console.log("Final Score: Human " + humanScore + ", Computer " + computerScore);
    if (humanScore > computerScore) {
        console.log("You win the game!");
    }
    else if (humanScore < computerScore) {
        console.log("You lose the game!");
    }
    else {
        console.log("The game is a tie!");
    }
    console.log("###################################");
}

playGame();