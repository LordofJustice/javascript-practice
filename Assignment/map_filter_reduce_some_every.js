const atLeastOnce = function (array) {
  const flated = array.flatMap(x => x);
  return flated.filter((element, index) => { return flated.indexOf(element) === index });
}

const countElement = function (array, element) {
  return array.reduce((count, colour) => { return colour === element ? count + 1 : count }, 0);
}

const ribbons = ["red", "blue", "red", "green", "red", "blue", "purple", "orange"];
const blueRibbonCount = countElement(ribbons, "red");
console.log("blueRibbonCount", blueRibbonCount);

const constellations = [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]]
const uniqueConst = atLeastOnce(constellations);
console.log("allSpottedConstellations", uniqueConst);

const birdsWatched = ["sparrow", "crow", "sparrow", "eagle", "crow"];
const uniqueBirds = atLeastOnce(birdsWatched);
console.log("uniqueBirds", uniqueBirds);

const attendance = [["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]];
const presentAtLeastOnce = atLeastOnce(attendance);
console.log("atLeastOnce", presentAtLeastOnce);

const candyRiffils = [[5, 3], [2], [4, 1]];
const totalCandyRiffil = candyRiffils.flatMap(x => x).reduce((x, y) => x + y);
console.log("totalCandyRiffil", totalCandyRiffil);

const groupsSangSong = [["mi", "fa", "so"],["do", "mi"],["fa"]];
const whetherSangDo = groupsSangSong.flat().some(x => x === "do");
console.log("whetherSangDo", whetherSangDo);

const tempratureSheets = [[22, 23],[25, 24, 22],[54]];
const areBelow32 = tempratureSheets.flat().every(x => x < 32);
console.log("areBelow32",areBelow32);

const runningLog = [[22, 23],[25, 24, 22],[29]];
const totalRunMiles = runningLog.flat().reduce((x,y) => x + y);
console.log("totalRunMiles",totalRunMiles);

const coloursUsed = [["blue", "yellow"],["yellow", "green"],["blue"]];
const uniqueColours = atLeastOnce(coloursUsed);
console.log("uniqueColours",uniqueColours);

const booksReturned = ["Dune", "Dune", "Foundation", "Dune"];
const duneReturned = countElement(booksReturned, "Dune");
console.log("duneReturned",duneReturned);

const listOfIngredeants = [["rice", "lentils"],["rice"],["curd", "lentils"]];
const distinctIngredients = atLeastOnce(listOfIngredeants);
console.log("distinctIngredients", distinctIngredients);

const singersProduceSequence = [["mi", "fa", "so"],["do", "mi"],["fa"]];
const whetherSangSo = singersProduceSequence.flat().some(x => x === "so");
console.log("whetherSangDo", whetherSangSo);

const crateWeights = [[4, 6],[2, 3, 1],[5]];
const totalCrateWeight = crateWeights.flat().reduce((x,y) => x + y);
console.log("totalCrateWeight", totalCrateWeight);

const parcelSizesLogged = ["small", "large", "medium", "small"];
const uniqueParselSizes = atLeastOnce(parcelSizesLogged);
console.log("uniqueParselSizes", uniqueParselSizes);

const animalSightings = ["deer", "deer", "rabbit", "deer"];
const seenDeer = countElement(animalSightings, "deer");
console.log("seenDeer", seenDeer);
