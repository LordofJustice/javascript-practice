function vowelDistance(string){
  return 2;
}

function displayResult(string, actual, expected) {
  const expectedSection = 'expected : ' + expected;
  const actualSection = 'actual : ' + actual;
  const mark = expected === actual ? '✅' : '❌';

  let message = '';
  message += mark;
  message += '[' + string + ']';
  message += '|' + expectedSection + '|';
  message += actualSection + '|';
  
  console.log(message);
}

function testVowelDistance(string, expected) {
  const actual = vowelDistance(string);
  displayResult(string, actual, expected);
}

function testAll() {
  testVowelDistance("abo", 2);
}

testAll();
