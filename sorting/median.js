const data = [1, 3, 5, 2, 6, 4];

function sortOf(data) {
  const sortedData = data.slice();
  for (let i = 0; i < sortedData.length; i++) {
    for (let j = i + 1; j < sortedData.length; j++) {
      if (sortedData[i] > sortedData[j]) {
        const temp = sortedData[i];

        sortedData[i] = sortedData[j];
        sortedData[j] = temp;
      }

    }
  }

  return sortedData;
}

function median(data) {
  const shortedData = sortOf(data);
  return shortedData[Math.floor(data.length / 2)];
}

console.log(sortOf(data));
console.log(median(data));
