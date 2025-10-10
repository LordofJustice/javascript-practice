console.log("guess a number which within 0 to 10");
console.log("If it is same as random number given by system you would win");
let playAgain = "";
function playGame() {
  const response = parseInt(prompt("Enter number :"));
  const randomNumber = Math.floor((Math.random()) * 10);
  console.log("your entered number is :", response);
  if (response === randomNumber) {
    console.log("You Win! Hurray");
  } else {
    console.log("You Loose!");
    console.log(`Random Number was : ${randomNumber}`);
  }
  playAgain = confirm("\n want to play again!");
  if (playAgain) {
    playGame();
  }
}
playGame();
