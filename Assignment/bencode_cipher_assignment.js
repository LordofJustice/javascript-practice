function encodeNumber(number) {
  return `i${number}e`;
}

function encodeString(string) {
  const stringLength = string.length;
  return `${stringLength}:${string}`;
}


function encode(data){
  const typeOfData = typeof(data);
  switch (typeOfData){
    case "number":
      return encodeNumber(data);
    case "string":
      return encodeString(data);
    case "object":
      return 
  }

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
  testEncode("negative integers", -42, "i-42e");
  testEncode("zero", 0, "i0e");
  testEncode("simple string", "hello world", "11:hello world");
  testEncode("empty string", 0, "i0e");
  testEncode("special ch string", "special!@#$chars", "16:special!@#$chars");
}

testAllEncode();
