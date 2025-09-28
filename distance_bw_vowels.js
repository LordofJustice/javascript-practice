function vowelFinder(string, index) {
  const vowels = 'aeiou';
  for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {

      if (string[index] === vowels[vowelIndex]) {
        return true;       
      }
  }

  return false;
}

function vowelDistance(string){
  let minimumDist = string.length;
  let lastSeenVowel = -1;
  for (let index = 0; index < string.length; index++) {
    const isVowel = vowelFinder(string, index);
    if (isVowel) {

      if (lastSeenVowel > -1) {
        const distance = index - lastSeenVowel;
        minimumDist = distance < minimumDist ? distance : minimumDist;
      }

      lastSeenVowel = index;
    }   
  }

  return minimumDist === string.length ? -1 : minimumDist;
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
  testVowelDistance("apple", 4);
  testVowelDistance("mango", 3);
  testVowelDistance("ape", 2);
  testVowelDistance("singer", 3);
  testVowelDistance("is it working", 3);
  testVowelDistance("no", -1);
  testVowelDistance("", -1);
  testVowelDistance("how are", 2);
  testVowelDistance("lol", -1);
  testVowelDistance("ao", 1);
  testVowelDistance("hurray", 3);
}

testAll();
