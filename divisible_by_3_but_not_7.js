let firstNumber = 0;
const lastNumber = 100;
let result = 0;
for (let count = firstNumber ; count <= lastNumber ; count++){
    if (count % 3 === 0 && count % 7 !== 0){
        console.log(count);
    }
}
