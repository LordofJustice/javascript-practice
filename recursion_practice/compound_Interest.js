function compoundInterest(p, r, t) {
  if (t === 0) {
    return 0;
  }
  const totalAmount = amount(p, r, t);
  return totalAmount - p;
}

function amount(p, r, t) {
  p += (p * r) / 100;
  if(t === 1) {
    return p;
  }
  return amount(p, r, t - 1);
}

function composeMessage(description, p, r, t, expected, actual) {
  let message = "";
  message += "---------------------------------\n";
  message += "[❌]" + "[" + description + "]\n\n";
  message += "[" + "Principal: " + p + "]\n";
  message += "[" + "Rate     : " + r + "]\n";
  message += "[" + "Time     : " + t + "]\n";
  message += "[" + "Expected : " + expected + "]\n";
  message += "[" + "Actual   : " + actual + "]\n";
  message += "---------------------------------\n";
  return message;
}

function isApprox(a, b) {
  const difference = a > b ? a - b : b - a;
  return difference < 0.5;
}

function displayResult(description, p, r, t, expected, actual) {
  const mark = isApprox(expected, actual) ? "✅" : "❌";
  if (mark === "✅") {
    console.log("[" + mark + "]", "[" + description + "]");
  } else {
    console.log(composeMessage(description, p, r, t, expected, actual));
  }
}

function testCI(description, p, r, t, expected) {
  const actual = compoundInterest(p, r, t);
  displayResult(description, p, r, t, expected, actual);
}

function testAllCI() {
  testCI("Compound Interest for 1 year", 100, 10, 1, 10);
  testCI("Compound Interest for 2 year", 100, 10, 2, 21);
  testCI("Compound Interest for 3 year", 100, 10, 3, 33.1);
  testCI("Compound Interest of 0 rupee", 0, 10, 3, 0);
  testCI("Compound Interest of 10 rupee", 10, 10, 2, 2.1);
  testCI("Compound Interest for interest 0% yearly", 100, 0, 3, 0);
  testCI("Compound Interest for interest 10% yearly", 100, 10, 3, 33.1);
}

testAllCI();
