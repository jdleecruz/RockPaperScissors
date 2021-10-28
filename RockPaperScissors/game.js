const game = () => {
    const result = document.querySelector(".result");
    const playerScoreBoard = document.querySelector(".p-count");
    const computerScoreBoard = document.querySelector(".c-count");
    let playerScore = 0;
    let computerScore = 0;

    const play = () => {
        const rBtn = document.querySelector(".rock");
        const pBtn = document.querySelector(".paper");
        const sBtn = document.querySelector(".scissors");
        const playerChoices = [rBtn, pBtn, sBtn];
        const computerChoices = ["rock", "paper", "scissors"];

        playerChoices.forEach(choice => {
            choice.addEventListener("click", function() {

                const choiceNum = Math.floor(Math.random()*3);
                const computerChose = computerChoices[choiceNum];

                wins(this.innerText, computerChose);
                result.style.display = "block";
            })
        })
    }

    const wins = (player, computer) => {
        player = player.toLowerCase();
        computer = computer.toLowerCase();

        if (player === computer) {
            result.textContent = 'TIE'
        }
        else if (player == "rock") {
            if (computer == "paper") {
                result.textContent = "Computer Won with PAPER";
                computerScore++;
                computerScoreBoard.textContent = computerScore;

            }else {
                result.textContent = "You Won with ROCK";
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == "scissors") {
            if (computer == "rock") {
                result.textContent = "Computer Won with ROCK";
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else {
                result.textContent = "You Won with SCISSORS";
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == "paper") {
            if (computer == "scissors") {
                result.textContent = "Computer Won with SCISSORS";
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else {
                result.textContent = "You Won with PAPER";
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }

    const reset = () => {
        const resetBtn = document.querySelector(".reset");

        resetBtn.addEventListener("click", function() {
            playerScore = 0;
            computerScore = 0;
            playerScoreBoard.textContent = playerScore;
            computerScoreBoard.textContent = computerScore;
            result.style.display = "none";
        })
    }

    play();
    reset();
}

game();
