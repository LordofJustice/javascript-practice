let noOfItration = 0;

function sortOf(data) {
  const shortedData = data.slice();
  for (let i = 0; i < shortedData.length; i++) {
    for (let j = i + 1; j < shortedData.length; j++) {
      if (shortedData[i] > shortedData[j]) {
        const temp = shortedData[i];

        shortedData[i] = shortedData[j];
        shortedData[j] = temp;
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

