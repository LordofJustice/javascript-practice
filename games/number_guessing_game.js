console.log("guess a number which within 0 to 10");
console.log("If it is same as random number given by system you would win");
const emoji = ['😁','🙂','😑','😔','😭']

function playAgain() {
  const wantToPlayAgain = confirm("\n want to play again!");
  if (wantToPlayAgain) {
    playGame();
  }
}

function playGame() {
  const randomNumber = Math.floor((Math.random()) * 10);
  for (let times = 0; times < 5; times++) {
    const response = parseInt(prompt("Enter number :"));
    if (response === randomNumber) {
      console.log("You Win! Hurray! 🙀🙀🙀");
      playAgain();
    } else {
      console.log(`Your Guess Was Wrong! ${emoji[times]} \n\n try Again`);
    }
  }
  console.log(`Random Number was : ${randomNumber}`);
  playAgain();
}

playGame();
