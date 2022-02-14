const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");
const resultsDiv = document.querySelector(".result");
const computerScoreDiv = document.querySelector(".computerScore>.score");
const playerScoreDiv = document.querySelector(".playerScore>.score");
const drawScoreDiv = document.querySelector(".drawScore>.score");
rockButton.addEventListener('click', () => game('rock'));
paperButton.addEventListener('click', () => game('paper'));
scissorsButton.addEventListener('click', () => game('scissors'));

let computerScore = 0;
let playerScore = 0;
let drawScore = 0;
updateDisplay();

function updateDisplay() {
    computerScoreDiv.textContent = computerScore;
    playerScoreDiv.textContent = playerScore;
    drawScoreDiv.textContent = drawScore;
}

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

function game(playerSelection) {
    let {result, message} = playRound(computerPlay(),playerSelection);
    resultsDiv.textContent = message;
    if (result == 'computer') {
        computerScore++;
    } else if (result == 'player') {
        playerScore++;
    } else if (result == 'draw') {
        drawScore++;
    }
    updateDisplay();
}

