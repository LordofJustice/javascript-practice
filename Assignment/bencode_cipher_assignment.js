function encodeNumber(number) {
  return `i${number}e`;
}

function encodeString(string) {
  return `${string.length}:${string}`;
}

function encodeArray(array, encodedArray = 'l') {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const encodedElement = encode(element);
    encodedArray += encodedElement;
  }
  return encodedArray + "e";
}

function encode(data){
  const typeOfData = typeof(data);
  switch (typeOfData){
    case "number":
      return encodeNumber(data);
    case "string":
      return encodeString(data);
    case "object":
      return encodeArray(data);
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
  testEncode("simple array", [123, "hello"], "li123e5:helloe");
  testEncode("simple array", [123, "hello"], "li123e5:helloe");
}

testAllEncode();
