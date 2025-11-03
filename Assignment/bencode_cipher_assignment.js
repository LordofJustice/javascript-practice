function encodeNumber(number) {
  return `i${number}e`;
}

function encodeString(string) {
  return `${string.length}:${string}`;
}

function encodeArray(array, encodedArray = 'l') {
  for (let index = 0; index < array.length; index++) {
    const encodedElement = encode(array[index]);
    encodedArray += encodedElement;
  }
  return encodedArray + "e";
}

function encode(data) {
  const typeOfData = typeof (data);

  switch (typeOfData) {
    case "number":
      return encodeNumber(data);
    case "string":
      return encodeString(data);
    case "object":
      return encodeArray(data);
  }
}

function decode(bencodedString) {
  if (bencodedString[0] === "i") {
    const lastIndex = bencodedString.indexOf("e");
    const integer = parseInt(bencodedString.slice(1, lastIndex))
    return integer;
  }
  if (typeof (bencodedString[0]) === "string") {
    const startIndex = bencodedString.indexOf(":");
    const string = bencodedString.slice(startIndex + 1, bencodedString.length);
    return string;
  }
}

function composeMessage(description, input, expected, actual) {
  let message = ``;
  message += "-".repeat(description.length + 6).concat("\n");
  message += `[❌][${description}]\n\n`;
  message += `[Input :  ${input}]\n`;
  message += `[Output :  ${actual}]\n`;
  message += `[Expected   :  ${expected}]\n`;
  message += `[Actual     :  ${actual}]\n`;
  message += "-".repeat(description.length + 6).concat("\n");
  return message;
}

function displayResult(description, input, expected, actual) {
  const mark = expected === actual ? "✅" : "❌";
  const message = composeMessage(description, input, expected, actual);

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
  testEncode("empty string", "", "0:");
  testEncode("special ch string", "special!@#$chars", "16:special!@#$chars");
  testEncode("simple array", [123, "hello"], "li123e5:helloe");
  testEncode("empty array", [], "le");
  testEncode("nested array", [[123, 'hello'], 123, 'hello'], "lli123e5:helloei123e5:helloe");
}

function testDecodes(description, bencodedString, expected) {
  const actual = `${decode(bencodedString)}`;
  displayResult(description, bencodedString, expected, actual);
}

function testAllDecodes() {
  testDecodes("integers", "i123e", `123`);
  testDecodes("string", "5:hello", "hello");
  testDecodes("empty string", "0:", "");
}

function main() {
  console.log("\n\n Encodes \n\n")
  testAllEncode();
  console.log("\n\n Decodes \n\n")
  testAllDecodes();
}

main();
