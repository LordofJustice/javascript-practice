const num1 = 23;
const num2 = 27;
const num3 = 23;
const extraOrdinary = "All Numbers are equal";

const result = num1>num2 && num1>num3 ? num1 : (num2>num1 && num2>num3 ? num2 : (num3>num1 && num3>num2 ? num3 : extraOrdinary ))
if (result === num1 || result === num2 || result === num3){
    console.log(result, 'is the largest number in three given numbesrs');
} else {
    console.log(extraOrdinary);
}
