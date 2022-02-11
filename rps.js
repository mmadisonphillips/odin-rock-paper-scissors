let playChoices = new Map ([
    ['rock', ['scissors', 'Rock crushes scissors.']],
    ['paper', ['rock', 'Paper covers rock.']],
    ['scissors', ['paper', 'Scissors cuts paper.']]] )

function computerPlay() {
    return Array.from(playChoices)[Math.floor(Math.random() * playChoices.size)][0];
}

function playRound(computerSelection, playerSelection) {
    ci_playerSelection = playerSelection.toLowerCase();
    if (playChoices.has(ci_playerSelection)) {
        let computerPlayChoice = playChoices.get(computerSelection);
        let playerPlayChoice = playChoices.get(ci_playerSelection);
        if (computerPlayChoice[0] == ci_playerSelection) {
            return {result : 'computer', message : `You lose! ${computerPlayChoice[1]}`};
        } else if (playerPlayChoice[0] == computerSelection) {
            return {result : 'player', message : `You win! ${playerPlayChoice[1]}`};
        } else {
            return {result : 'draw', message :`It's a draw!`};
        }
    } else {
        return {result : 'error', message : `Uh oh! ${playerSelection} is not a valid selection.`};
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;
    for (let i = 0; i < 5; i++) {
        let computerChoice = computerPlay();
        let playerChoice = "";
        let isError;
        do {
            let playerChoice = prompt(`Round ${i+1}. Rock, paper, or scissors (or quit)?`);
            let { result, message } = playRound(computerChoice, playerChoice);
            console.log(message);
            if (result == 'computer') {
                computerScore++;
            } else if (result == 'player') {
                playerScore++;
            } else if (result == 'draw') {
                draws++;
            }
            isError = (result == 'error');
        } while (playerChoice.toLowerCase() != 'quit' && isError);
    }
    console.log(`Total computer wins: ${computerScore}`);
    console.log(`Total player wins: ${playerScore}`);
    console.log(`Total draws: ${draws}`);
}
