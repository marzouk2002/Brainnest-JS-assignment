// Computer choice function
function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Game function
function playRound(playerSelection, computerSelection) {
    // input normalization
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
    const choices = ['rock', 'paper', 'scissors'];
    
    // input validation
    if(!choices.includes(playerChoice) || !choices.includes(computerChoice)) {
        return {
            status: "error",
            message: 'Oops! Please enter a valid choice.'
        };
    }

    switch(playerChoice+computerChoice) {
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            return {
                status: "tie",
                message:'It\'s a tie!'
            };
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            return {
                status: "lose",
                message:'You lose! ' + computerChoice + ' beats ' + playerChoice
            };
        case 'rockscissors':
        case 'scissorspaper':
        case 'paperrock':
            return {
                status: "win",
                message: 'You win! ' + playerChoice + ' beats ' + computerChoice
            };
    }
}

// play a number of rounds in a row
function game(rounds) {
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < rounds; i++) {
        const userChoice = prompt('Rock, paper, or scissors?');
        if (userChoice === null) return;
        const computerChoice = computerPlay();
        const {status, message} = playRound(userChoice, computerChoice);
        console.log(message);
        switch(status) {
            case 'win':
                playerScore++;
                break;
            case 'lose':
                computerScore++;
                break;
            case 'tie':
                break;
            case 'error':
                i--;
                break;
        }
    }

    if(playerScore > computerScore) {
        console.log('You win!');
    } else if(playerScore < computerScore) {
        console.log('You lose!');
    } else {
        console.log('It\'s a tie!');
    }
}

game(5);