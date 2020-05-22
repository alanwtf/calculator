let plus = (a, b) => a + b;

let minus = (a, b) => a - b;

let multiply = (a, b) => a * b;

let divide = (a, b) => a / b;

let numbersArray = [];

let currentOperation = '';

let nextOperation = '';

const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const input = document.querySelector('#input');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');

numbers.forEach(number => number.addEventListener('click', numberButtonPressed));

operations.forEach(operation => operation.addEventListener(('click'), handleOperation));

equals.addEventListener('click', handleOperation);

clear.addEventListener('click', function(){
    input.value = '';
    arrayNumbers = [];
    console.table(arrayNumbers);
} );

function numberButtonPressed(){
    input.value += this.value;
}

function displayNumber(num){
    input.value = num;
}


function handleOperation(){
    if(numbersArray.length === 0){
        numbersArray.push(input.value);
        currentOperation = this.value;
    } else if (numbersArray.length >= 1 && currentOperation !== 'equals'){
        console.log(this.value);
        numbersArray.push(input.value);
        nextOperation = this.value;
        let num1 = parseFloat(numbersArray[numbersArray.length - 2]);
        let num2 = parseFloat(numbersArray[numbersArray.length - 1]);
        let result = operationes(currentOperation, num1, num2);
        numbersArray.push(result);
        displayNumber(result);
        currentOperation = nextOperation;
    } else {
        currentOperation = this.value;
    }
}

function operationes(result, num1, num2){
    switch(result){
        case 'plus':
            return plus(num1, num2);
        case 'minus':
            return minus(num1, num2);
        case 'multiply':
            return multiply(num1, num2);
        case 'divide':
            return divide(num1, num2);
    }
}