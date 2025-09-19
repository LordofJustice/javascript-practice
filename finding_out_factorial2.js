const inputNumber = 5;
let factorial = 1;
for ( let counter = 1;counter <= inputNumber;counter++){
    factorial = counter * factorial;
}
console.log("for input",inputNumber,"factorial is",factorial);
