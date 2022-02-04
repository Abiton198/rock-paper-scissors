

const choices = ['rock', 'paper', 'scissors']
function game() {
    playRound();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = playerChoice();

    }

function playerChoice() {
    let input = prompt('Type Rock', 'Paper', 'Scissors');
    while(input == null){
        input = prompt('Type Rock', 'Paper', 'Scissors')
    }
    input = input.toLowerCase();
    console.log(input)

}

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

game();

