let decimalNum = 7;
let binaryDigit;
let binary = 0;
while (decimalNum !== 0){
    binaryDigit = decimalNum % 2;
    binary = binary * 10 + binaryDigit;
    decimalNum = (decimalNum - binaryDigit) / 2;
}
let remainder;
let binaryFlip = 0;
while(binary !== 0) {
    remainder = binary % 10;
    binaryFlip = binaryFlip * 10 + remainder;
    binary = (binary - remainder)/10;
}
console.log(binaryFlip);

