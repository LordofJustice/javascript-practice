const data = [1, 3, 5, 2, 6, 4];

function swap(array, x, y) {
  const temp = array[x];
  array[x] = array[y];
  array[y] = temp;
  return array;
}

function sortOf(data) {
  const sortedData = data.slice();
  for (let i = 0; i < sortedData.length; i++) {
    for (let j = i + 1; j < sortedData.length; j++) {
      if (sortedData[i] > sortedData[j]) {
        swap(sortedData, i, j);
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
