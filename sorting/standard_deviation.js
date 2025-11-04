const data = [1, 3, 5, 2, 6, 4];

function sqr(number) {
  return number * number;
}

function meanOf(data) {
  let additionOfTerms = 0;
  for (let term = 0; term < data.length; term++) {
    additionOfTerms += data[term];
  }

  return additionOfTerms / data.length;
}

function standardDeviation(data) {
  const mean = meanOf(data);
  let additionOfTermsSqr = 0;
  for (let term = 0; term < data.length; term++) {
    const diff = data[term] - mean;
    additionOfTermsSqr += sqr(diff);
  }
  return Math.sqrt(additionOfTermsSqr / data.length);
}

console.log(standardDeviation(data));

