const num1 = 13;
const num2 = 10;

function calculate(opration, op1, op2) {
  return opration(op1, op2);
}

const cal = calculate(function(a, b){return a * b}, num1, num2);

console.log(cal);
