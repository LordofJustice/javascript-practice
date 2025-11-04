let noOfItration = 0;

function swap(array, x, y) {
  const temp = array[x];
  array[x] = array[y];
  array[y] = temp;
  return array;
}

function sortOf(data) {
  const shortedData = data.slice();
  for (let i = 0; i < shortedData.length; i++) {
    for (let j = i + 1; j < shortedData.length; j++) {
      if (shortedData[i] > shortedData[j]) {
        swap(shortedData, i, j);
      }
      noOfItration++;
    }
  }

  return shortedData;
}

function randomNumbers(lowestValue, highestValue) {
  return lowestValue + Math.floor(Math.random() * (highestValue - lowestValue));
}

function generateData(noOfElements, lowestValue, highestValue) {
  const data = [];
  for (let i = 0; i < noOfElements; i++) {
    const randomNumber = randomNumbers(lowestValue, highestValue);
    data.push(randomNumber);
  }
  return data;
}

function benchmark() {
  console.log(sortOf(generateData(10, 1, 10)));
  console.log(`number OF Itration :${noOfItration}`);
}

benchmark();
