let remainder;
let pow = 1;
let binary = 0;
while (decimalNum >= 1){
    remainder = decimalNum % 2;
    binary = binary + (remainder * pow) ;
    pow = pow * 10;
    decimalNum = (decimalNum - remainder) / 2;
}
console.log(binary);
