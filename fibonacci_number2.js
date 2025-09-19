const serialNo = 67;
let firstFibonacciNumber = 0;
let secondFibonacciNumber = 1;
let fibonacciNumber;    
switch (serialNo){
    case 1 :
        fibonacciNumber = firstFibonacciNumber;
    break;    
    case 2 :
        fibonacciNumber = secondFibonacciNumber;
    break;
}
for (let serialNoCounter = 2;serialNoCounter < serialNo ; serialNoCounter ++){
    fibonacciNumber = firstFibonacciNumber + secondFibonacciNumber;
    firstFibonacciNumber = secondFibonacciNumber;
    secondFibonacciNumber = fibonacciNumber;
}
console.log("your",serialNo,"th fibonacchi number is",fibonacciNumber,
    "thank you for using this code (@:@)");
