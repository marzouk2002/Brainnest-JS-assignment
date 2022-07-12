// Computer choice function
function conmputerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Game function
function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
    const choices = ['rock', 'paper', 'scissors'];
    
    if(!choices.includes(playerChoice) || !choices.includes(computerChoice)) {
        return 'Oops! Please enter a valid choice.';
    }

    switch(playerChoice+computerChoice) {
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            return 'It\'s a tie!'
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            return 'You lose! ' + playerChoice + ' beats ' + computerChoice;
        case 'rockscissors':
        case 'scissorspaper':
        case 'paperrock':
            return 'You win! ' + computerChoice + ' beats ' + playerChoice;
    }
}