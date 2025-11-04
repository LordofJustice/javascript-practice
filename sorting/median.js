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

function isOdd(number) {
  return number % 2 !== 0;
}

function median(data) {
  const shortedData = sortOf(data);
  if (isOdd(data.length)) {
    const middleTermPos = ((data.length) - 1) / 2;
    return shortedData[middleTermPos];
  } else {
    const firstMiddleTermPos = (data.length / 2) - 1;
    const secondMiddleTermPos = (data.length / 2);
    return (shortedData[firstMiddleTermPos] + shortedData[secondMiddleTermPos]) / 2;
  }
}

console.log(sortOf(data));
console.log(median(data));


