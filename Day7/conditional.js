let num1 = 20;

// if(num1 % 2 == 0){
//     console.log(`${num1} is divisible by 2`);
// }
// else {
//     console.log(`${num1} is divisible by 3`);
// }

function divisibleBy8(num1){
    if(num1 % 5 == 0){
        console.log(`${num1} is divisible by 5`);
    }
    else if(num1 % 3 == 0){
        console.log(`${num1} is divisible by 3`);
    }
    else {
        console.log(`${num1} is not divisible by 8`);
    }
}