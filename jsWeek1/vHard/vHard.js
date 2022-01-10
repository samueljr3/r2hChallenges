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

let num1 = prompt("Enter a number");
let operation = prompt("Pick an operation. + - * or /");
let num2 = prompt("Enter another number");

if(operation == "+"){
    console.log(`${num1} + ${num2} = ${add(parseInt(num1), parseInt(num2))}`);
}
else if(operation == "-"){
    console.log(`${num1} - ${num2} = ${subtract(parseInt(num1), parseInt(num2))}`);
}
else if(operation == "*"){
    console.log(`${num1} * ${num2} = ${multiply(parseInt(num1), parseInt(num2))}`);
}
else if(operation == "/"){
    console.log(`${num1} / ${num2} = ${divide(parseInt(num1), parseInt(num2))}`);
}
else{
    console.log("Invalid entry");
}

