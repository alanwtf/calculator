

let plus = (a, b) => a + b;

let minus = (a, b) => a - b;

let multiply = (a, b) => a * b;

let divide = (a, b) => a / b;

let numbersArray = [];

let currentOperation = '';

let nextOperation = '';

let operationLast = false;

const buttons = document.querySelectorAll('.button');
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const input = document.querySelector('#input');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');

document.onload = clearDisplay();

document.addEventListener('keypress', keyboardKeyPressed);

buttons.forEach(button => button.addEventListener('transitionend', removePlaying));

numbers.forEach(number => number.addEventListener('click', numberButtonPressed));

operations.forEach(operation => operation.addEventListener(('click'), handleOperation));

equals.addEventListener('click', handleOperation);

clear.addEventListener('click', clearDisplay);

function removePlaying(e){
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

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
                break;
            case '.':
                document.getElementById('dot').click();
                break;
        }
    }
}

function numberButtonPressed(e){
    if(currentOperation === 'equals'){
        clearDisplay();
        currentOperation = '';
    }
    if(this.value === "." && !this.value.disabled)
        this.disabled = true;
    if(operationLast){
        input.value= '';
        document.getElementById('dot').disabled = false;
    }
    operationLast = false;
    input.value += this.value;
    this.classList.add('playing');
}

function displayNumber(num){
    input.value = num;
}


function handleOperation(){
    this.classList.add('playing');
    if(numbersArray.length === 0 && !operationLast){
        numbersArray.push(parseFloat(input.value));
        currentOperation = this.value;
    } else if (numbersArray.length >= 1 && currentOperation !== 'equals' && !operationLast){
        console.log(this.value);
        numbersArray.push(parseFloat(input.value));
        nextOperation = this.value;
        let num1 = parseFloat(numbersArray[numbersArray.length - 2]);
        let num2 = parseFloat(numbersArray[numbersArray.length - 1]);
        let result = operationes(currentOperation, num1, num2);
        if(isNaN(result)){
            alert('ERROR');
            clearDisplay();
            return;
        }
        if(result.toString().length > 25){
            result = parseFloat(result.toString().substring(0,24));
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
    numbersArray = [];
    console.table(numbersArray);
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