const squar = [
  ['⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️'],
  ['⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️'],
  ['⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️'],
  ['⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️'],
  ['⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️'],
  ['⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️'],
  ['⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️'],
  ['⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️'],
  ['⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️'],
  ['⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️'],
]

function generatePatterns(array) {
  for (let rowIndex = 0; rowIndex < array.length; rowIndex++) {
    for (let columnIndex = 0; columnIndex < array.length; columnIndex++) {
      const element = array[rowIndex][columnIndex];
      const row = rowIndex;
      const column = columnIndex;
      if (mathmeticalOpration(row, column)) {
        array[rowIndex][columnIndex] = '🟦';
      }
    }
  }
  display(array);
}

function display(array) {
  console.clear();
  const outputArray = [];
  for (let index = 0; index < array.length; index++) {
    const row = array[index].join('');
    outputArray.push(row)
  }
  console.log(outputArray.join('\n'));
}

generatePatterns(squar);

function mathmeticalOpration(row, col) {
  return (Math.min(row, col) % 11 === 0) || row === col || (Math.max(row, col) % 9 === 0) || row === 9 - col;
}
