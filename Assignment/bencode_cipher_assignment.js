function encode(data){
  return "i123e"

}

function composeMessage(description, data, expected, actual) {
  let message = ``;
  message += "-".repeat(description.length + 6).concat("\n");
  message += `[❌][${description}]\n\n`;
  message += `[Input :  ${data}]\n`;
  message += `[Encode :  ${actual}]\n`;
  message += `[Expected   :  ${expected}]\n`;
  message += `[Actual     :  ${actual}]\n`;
  message += "-".repeat(description.length + 6).concat("\n");
  return message;
}

function displayResult(description, data, expected, actual) {
  const mark = expected === actual ? "✅" : "❌";
  const message = composeMessage(description, data, expected, actual);

  if (expected === actual) {
    console.log(`[${mark}][${description}]`);
  } else {
    console.log(message);
  }
}

function testEncode(description, data, expected) {
  const actual = encode(data);
  displayResult(description, data, expected, actual);
}

function testAllEncode() {
  testEncode("integers", 123, "i123e");
}

testAllEncode();
