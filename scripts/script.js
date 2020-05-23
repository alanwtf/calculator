

let plus = (a, b) => a + b;

let minus = (a, b) => a - b;

let multiply = (a, b) => a * b;

let divide = (a, b) => a / b;

let numbersArray = [];

let currentOperation = '';

let nextOperation = '';

let operationLast = false;

const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const input = document.querySelector('#input');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');

document.onload = clearDisplay();

document.addEventListener('keypress', keyboardKeyPressed);

numbers.forEach(number => number.addEventListener('click', numberButtonPressed));

operations.forEach(operation => operation.addEventListener(('click'), handleOperation));

equals.addEventListener('click', handleOperation);

clear.addEventListener('click', clearDisplay);

function keyboardKeyPressed(e){
    let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let numbersIds = ['zero', 'one', 'two', 'three', 'four','five', 'six', 'seven',
        'eight','nine'];
    let action = (e.keyCode === 13) ? 'enter' : String.fromCharCode(e.keyCode);
    
    if(!isNaN(action) && action in numbersArray)
        document.getElementById(numbersIds[action]).click();
    else {  
        switch(action){
            case '+':
                document.getElementById('plus-btn').click();
                break;
            case '-':
                document.getElementById('minus-btn').click();
                break;
            case '*':
                document.getElementById('multiply-btn').click();
                break;
            case '/':
                document.getElementById('divide-btn').click();
                break;
            case 'enter':
                document.getElementById('equals').click();
        }
    }
}

function numberButtonPressed(e, value = null){
    if(operationLast) 
        input.value= '';
    operationLast = false;
    input.value += (value != null)? value : this.value;

}

function displayNumber(num){
    input.value = num;
}


function handleOperation(){
    if(numbersArray.length === 0 && !operationLast){
        numbersArray.push(input.value);
        currentOperation = this.value;
    } else if (numbersArray.length >= 1 && currentOperation !== 'equals' && !operationLast){
        console.log(this.value);
        numbersArray.push(input.value);
        nextOperation = this.value;
        let num1 = parseFloat(numbersArray[numbersArray.length - 2]);
        let num2 = parseFloat(numbersArray[numbersArray.length - 1]);
        let result = operationes(currentOperation, num1, num2);
        if(isNaN(result)){
            clearDisplay();
            return;
        }
        numbersArray.push(result);
        displayNumber(result);
        currentOperation = nextOperation;
        operationLast = true;
    } else {
        currentOperation = this.value;
        
    }
    operationLast = true;
}

function clearDisplay(){
    input.value = '';
    arrayNumbers = [];
    console.table(arrayNumbers);
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
            if(num2 === 0)
                return alert('You broke the universe');
            return divide(num1, num2);
    }
}