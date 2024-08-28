let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    if (result === 'win') {
        userScore++;
        document.getElementById('result').innerHTML = `You chose ${userChoice}. Computer chose ${computerChoice}. You win!`;
    } else if (result === 'lose') {
        computerScore++;
        document.getElementById('result').innerHTML = `You chose ${userChoice}. Computer chose ${computerChoice}. You lose!`;
    } else {
        document.getElementById('result').innerHTML = `You chose ${userChoice}. Computer chose ${computerChoice}. It's a tie!`;
    }

    document.getElementById('score').innerHTML = `Score: You - ${userScore}, Computer - ${computerScore}`;
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'tie';
    }

    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'win';
    } else {
        return 'lose';
    }
}
function resetGame() {
    userScore = 0;
    computerScore = 0;
    document.getElementById('result').innerHTML = '';
    document.getElementById('score').innerHTML = `Score: You - ${userScore}, Computer - ${computerScore}`;
}


