// largest number in array
function largestOfTwoNumber(a, b) {
  return a > b ? a : b;
}

function largestNumberInArray(array) {
  let largerNumber = array[0];

  for (let index = 1; index < array.length; index++) {
    const currentNumber = array[index];
    largerNumber = largestOfTwoNumber(currentNumber, largerNumber);
  }
  
  return largerNumber;
}

function composeMessage(description, array, expected, actual) {
  let message = ``;
  message += "-".repeat(description.length + 6).concat("\n");
  message += `[❌][${description}]\n\n`;
  message += `[Array      :  ${array}]\n`;
  message += `[Expected   :  ${expected}]\n`;
  message += `[Actual     :  ${actual}]\n`;
  message += "-".repeat(description.length + 6).concat("\n");
  return message;
}

function displayResult(description, array, expected, actual) {
  const mark = expected === actual ? "✅" : "❌";
  const message = composeMessage(description, array, expected, actual);

  if (expected === actual) {
    console.log(`[${mark}][${description}]`);
  } else {
    console.log(message);
  }
}

function testLargestNumberInArray(description, array, expected) {
  const actual = largestNumberInArray(array);

  displayResult(description, array, expected, actual);
}

function testAllLargestNumberInArray() {
  testLargestNumberInArray("two numbers in array", [0, 1], 1);
  testLargestNumberInArray("three numbers in array", [0, 1, 3], 3);
  testLargestNumberInArray("four numbers in array", [0, 1, 2, 4], 4);
  testLargestNumberInArray("five numbers in array", [0, 1, 2, 5, 3], 5);
  testLargestNumberInArray("when two numbers are equal and together", [0, 1, 2, 2], 2);
  testLargestNumberInArray("when two numbers are equla but not together", [0, 2, 1, 2], 2);
  testLargestNumberInArray("all 0 in array", [0, 0, 0, 0,], 0);
  testLargestNumberInArray("when all numbers are equal in array", [3,3,3,3,3,3], 3);
}

testAllLargestNumberInArray();
