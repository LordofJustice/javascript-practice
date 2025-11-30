import {
  executeInstruction,
  isRoverFallen,
  parsePlateau,
  parsePosition,
} from "./rover_program.js";

const plateauSurface = "🌑";

const plateau = prompt("Input Plateau Boundry[x y]:") || "55 21";
const position = prompt("Input Initial Position[x y N]:").toUpperCase() ||
  "10 10 N";
let instructions = "LLLL";

const plateauArea = parsePlateau(plateau);
const { xMax, yMax } = plateauArea;
let currentPosition = parsePosition(position);

const drawPlateau = (Array(yMax).fill(0)).map((x) =>
  `${plateauSurface}`.repeat(xMax).match(/.{2}/g)
);

const pointer = {
  E: "➡️ ",
  W: "⬅️ ",
  N: "⬆️ ",
  S: "⬇️ ",
};

const panel = ({ x, y, direction }) => {
  let message = ``;
  message += "\n\n⎧" + "-".repeat(30) + "⎫\n";
  message += "|" + "ROVER POSITION".padStart(22, " ").padEnd(30, " ") + "|\n";
  message += `| x : ${x}`.padEnd(31, " ") + "|\n";
  message += `| y : ${y}`.padEnd(31, " ") + "|\n";
  message += `| direction : ${direction}`.padEnd(31, " ") + "|\n";
  message += "⎩" + "-".repeat(30) + "⎭\n";
  return message;
};

const showRoverOnScreen = (array, position) => {
  const map = array.map((x, i) => `${i} |`.padStart(4, "0") + x.join("") + "|")
    .reverse();
  console.clear();
  console.log(" " + "⏤⏤".repeat(array[0].length));
  console.log(map.join("\n"));
  console.log(" " + "⏤⏤".repeat(array[0].length));
  console.log(panel(position));
  map.reverse();
};

let j = 0;

const plotPlatue = ({ x, y, direction }) => {
  drawPlateau[y][x] = pointer[direction];
  showRoverOnScreen(drawPlateau, currentPosition);
  drawPlateau[y][x] = `${plateauSurface}`;
  j++;
  if (j === instructions.length) {
    instructions = prompt("Enter Instructions:").toUpperCase();
    j = 0;
  }
};

const b = setInterval(() => {
  const { x, y, direction } = executeInstruction(
    currentPosition,
    instructions.at(j),
  );
  currentPosition = { x, y, direction };
  if (isRoverFallen(currentPosition, plateauArea)) {
    console.log("ROVER LOST ⚠️");
    clearInterval(b);
  } else {
    plotPlatue(currentPosition);
  }
}, 200);
