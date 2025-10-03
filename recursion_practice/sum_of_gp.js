function gpAddition(a, r, n, sum) {
  sum += a;
  if (n === 1) {
    return sum;
  }
  a = a * r;
  return gpAddition(a, r, n - 1, sum);
}

function sumOfGP(a, r, n) {
  if (n === 0) {
    return 0;
  }
  return gpAddition(a, r, n, 0);
}

function composeMessage(description, a, r, n, expected, actual) {
  let message = "";
  message += "---------------------------------\n";
  message += "[❌]" + "[" + description + "]\n\n";
  message += "[" + "First Term  : " + a + "]\n";
  message += "[" + "Ratio       : " + r + "]\n";
  message += "[" + "No of Terms : " + n + "]\n";
  message += "[" + "Expected : " + expected + "]\n";
  message += "[" + "Actual   : " + actual + "]\n";
  message += "---------------------------------\n";
  return message;
}

function displayResult(description, a, r, n, expected, actual) {
  const mark = expected === actual ? "✅" : "❌";

  if (mark === "✅") {
    console.log("[" + mark + "]", "[" + description + "]");
  } else {
    console.log(composeMessage(description, a, r, n, expected, actual));
  }
}

function testSumOfGp(description, a, r, n, expected) {
  const actual = sumOfGP(a, r, n);
  displayResult(description, a, r, n, expected, actual);
}

function testAllSumOfGp() {
  testSumOfGp("all value are one", 1, 1, 1, 1);
  testSumOfGp("gp of 0 terms", 4, 3, 0, 0);
  testSumOfGp("when diff is negative", 1, -1, 3, 1);
  testSumOfGp("when first term is negative", -1, 1, 3, -3);
  testSumOfGp("power of 2", 2, 2, 3, 14);
  testSumOfGp("addition of 5 terms", 3, 2, 5, 93);
}

testAllSumOfGp();
