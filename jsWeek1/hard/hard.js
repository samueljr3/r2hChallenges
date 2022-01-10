

function add(num, num2){
    return num + num2;
}

function subtract(num, num2){
    return num - num2;
}

function multiply(num, num2){
    return num * num2;
}

function divide(num, num2){
    return num / num2;
}
let number = 3;
let number2 = 5;

console.log(`Number and Number2 added is ${add(number, number2)}`);
console.log(`Number and Number2 subtracted is ${subtract(number, number2)}`);
console.log(`Number and Number2 multiplied is ${multiply(number, number2)}`);
console.log(`Number divided by Number2 is ${divide(number, number2)}`);