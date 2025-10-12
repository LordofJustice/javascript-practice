const ticTacToe = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];

const player1 = prompt('User X Enter Your Name :');
const palyer2 = prompt('User O Enter Your Name :');
const players = [player1, palyer2];

function isRepeatedInput(occupiedSpots, userInput) {
  return occupiedSpots.includes(userInput);
}

function isValid(userInput) {
  const validInputs = ['11', '12', '13', '21', '22', '23', '31', '32', '33'];
  return validInputs.includes(userInput);
}

function nonRepeatedInput(occupiedSpots, userInput, currentPlayer) {
  if (isRepeatedInput(occupiedSpots, userInput)) {
    console.log(`Sorry but Cordinate ${userInput} is already Occupied!\n`)
    userInput = prompt(`[${currentPlayer}] Enter your Cordinates Again :`);
    return nonRepeatedInput(occupiedSpots, userInput, currentPlayer);
  } else if (!isValid(userInput)) {
    console.log(`Sorry but Cordinate ${userInput} is NOT VALID!\n`)
    userInput = prompt(`[${currentPlayer}] Enter your Cordinates Again :`);
    return nonRepeatedInput(occupiedSpots, userInput, currentPlayer);
  } else {
    return userInput;
  }
}

function displayGame(gameArray) {
  console.clear();

  const firstRow = gameArray[0].join(' | ');
  const secondRow = gameArray[1].join(' | ');
  const thirdRow = gameArray[2].join(' | ');
  const gameLayout = [firstRow, secondRow, thirdRow];
  return gameLayout.join('\n----------\n');

}

function includes(array1, array2) {
  let elementFound = 0;
  for (let row = 0; row < array1.length; row++) {
    for (let column = 0; column < array2.length; column++) {
      if (array2.includes(array1[row][column])) {
        elementFound++;
      }
    }
    if (elementFound === array1[0].length) {
      return true;
    } else {
      elementFound = 0;
    }
  }
  return false;
}

function playerOccupiedSpot(allOccupiedSpot, playerNo) {
  const occupiedSpotsByPlayer = [];
  for (let index = playerNo; index < allOccupiedSpot.length; index += 2) {
    occupiedSpotsByPlayer.push(allOccupiedSpot[index]);
  }
  return occupiedSpotsByPlayer;
}

function didWin(occupiedSpots) {
  const allWinningCordinates = [['11', '12', '13']
    , ['21', '22', '23'], ['31', '32', '33'], ['11', '21', '31'],
  ['12', '22', '32'], ['13', '23', '33'], ['11', '22', '33'], ['13', '22', '31']
  ];
  const XplrOccSpots = playerOccupiedSpot(occupiedSpots, 0);
  const OplrOccSpots = playerOccupiedSpot(occupiedSpots, 1);
  return includes(allWinningCordinates, XplrOccSpots) ||
   includes(allWinningCordinates, OplrOccSpots);
}

function playAgain() {
  const wantToPlayAgain = confirm("\n want to play again!");
  if (wantToPlayAgain) {
    playGame();
  }
}

function gameStart(gameArray, players, occupiedSpots = []) {
  gameArray = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
  for (let index = 0; index < 9; index++) {
    const currentPlayer = players[index % 2];
    let userInput = prompt(`[${currentPlayer}] Enter your Cordinates like 11,21 :`);
    userInput = nonRepeatedInput(occupiedSpots, userInput, currentPlayer);
    occupiedSpots.push(userInput);
    const row = parseInt(userInput.at(0)) - 1;
    const column = parseInt(userInput.at(1)) - 1;
    const char = 'XO'[index % 2]
    gameArray[row][column] = char;
    const display = displayGame(gameArray);
    console.log(display);
    if (didWin(occupiedSpots)) {
      console.log(`[${currentPlayer}] Won the Game 🙀🙀🙀`);
      playAgain();
    }
  }
  console.log("[it's a Draw]\n");
  playAgain();
}

function playGame() {
  gameStart(ticTacToe, players);
}

playGame();
