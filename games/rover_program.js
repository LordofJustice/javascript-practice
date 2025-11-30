const compass = {
  E: { left: "N", right: "S", offset: [1, 0] },
  W: { left: "S", right: "N", offset: [-1, 0] },
  N: { left: "W", right: "E", offset: [0, 1] },
  S: { left: "E", right: "W", offset: [0, -1] },
};

export const move = (coordinates) => {
  const { x, y, direction } = coordinates;
  const [dx, dy] = compass[direction].offset;
  return { x: x + dx, y: y + dy, direction };
};

const turnLeft = (coordinates) => {
  return { ...coordinates, direction: compass[coordinates.direction].left };
};

const turnRight = (coordinates) => {
  return { ...coordinates, direction: compass[coordinates.direction].right };
};

export const executeInstruction = (coordinates, instruction) => {
  const instructionList = {
    "M": move,
    "L": turnLeft,
    "R": turnRight,
  };
  return instructionList[instruction](coordinates);
};

export const isRoverFallen = (coordinates, plateau) => {
  const { x, y } = coordinates;
  const { xMax, yMax, xMin, yMin } = plateau;
  return x >= xMax || y >= yMax || x < xMin || y < yMin;
};

export const parsePlateau = (plateau) => {
  const [xMax, yMax] = plateau.split(" ");
  return {
    xMax: parseInt(xMax),
    yMax: parseInt(yMax),
    xMin: 0,
    yMin: 0,
  };
};

export const parsePosition = (position) => {
  const [x, y, direction] = position.split(" ");
  return {
    x: parseInt(x),
    y: parseInt(y),
    direction: direction,
  };
};
