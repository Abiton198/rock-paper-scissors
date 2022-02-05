const choices = ['rock', 'paper', 'scissors'] 
const winners = [];

function game() {
   for (let i = 0; i <= 5; i++) {
       playRound(i);
   }
   document.querySelector("button").textContent = "Play new game";
   logwins();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = playerChoice();
    const winner = checkWinner(playerSelection,computerSelection);
    winners.push(winner);    
    logRound(playerSelection,computerSelection,winner,round);
}

function playerChoice() {
    let input = prompt("Type Rock, Paper, or Scissors");
        while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt(
            "Type Rock, Paper or Scissors.Spelling needs to be exact, but capitalization doesnt matter"
            );
    while(input == null){
        input = prompt("Type Rock, Paper or Scissors");
    }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input; 
}

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
    return choices.includes(choices);
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return "Tie";
    } else if (
    (choiceP === "rock" && choiceC == "scissors") || 
    (choiceP === "paper" && choiceC == "rock") ||
    (choiceP === "scissors" && choiceC == "paper")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

 function logwins() {
     let playerwins = winners.filter((item) => item == "player").length;
     let computerwins = winners.filter((item) => item == "computer").length;
     let ties = winners.filter((item) => item == "tie").length;
     console.log("Results:");
     console.log("Player wins:", playerwins);
     console.log("Computer wins:", computerwins);
     console.log("Ties:", ties);
 }

  function logRound(playerChoice,computerChoice,winner,round){
    console.log("Round:",round);
      console.log("Player Chose:",playerChoice);
      console.log("Computer Chose:",computerChoice);
      console.log(winner, "won the Round");
      console.log("-----------------------------------------------");
  }

