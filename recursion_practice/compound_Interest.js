function compoundInterest(p, r, t) {
  if (t === 0) {
    return 0;
  }
  const start = 1;
  const end = t;
  const totalAmount = amount(p, r, start, end);
  return totalAmount - p;
}

function amount(p, r, term, endTerm) {
  p += (p * r) / 100;
  if(term === endTerm) {
    return p;
  }
  return amount(p, r, term + 1, endTerm);
}

function composeMessage(discription, p, r, t, expected, actual) {
  let message = "";
  message += "---------------------------------\n";
  message += "[❌]" + "[" + discription + "]\n\n";
  message += "[" + "Principal: " + p + "]\n";
  message += "[" + "Rate     : " + r + "]\n";
  message += "[" + "Time     : " + t + "]\n";
  message += "[" + "Expected : " + expected + "]\n";
  message += "[" + "Actual   : " + actual + "]\n";
  message += "---------------------------------\n";
  return message;
}

function displayResult(discription, p, r, t, expected, actual) {
  const mark = expected === actual ? "✅" : "❌";

  if (mark === "✅") {
    console.log("[" + mark + "]", "[" + discription + "]");
  } else {
    console.log(composeMessage(discription, p, r, t, expected, actual));
  }
}

function testCI(discription, p, r, t, expected) {
  const actual = compoundInterest(p, r, t);
  displayResult(discription, p, r, t, expected, actual);
}

function testAllCI() {
  testCI("Compound Interest for 1 year", 100, 10, 1, 10);
  testCI("Compound Interest for 2 year", 100, 10, 2, 21);
  testCI("Compound Interest for 3 year", 100, 10, 3, 33.1);
}

testAllCI();
