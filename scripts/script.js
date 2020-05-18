let inputArray = [];
let currentValue = 0;

const plusBtn = document.querySelector('#plus-btn');
const input = document.querySelector('#input');

plusBtn.addEventListener('click', function(){
    if(inputArray.length < 1){
        notReadyToCalculate();
    } else {
        inputArray.push(parseFloat(input.value));
        input.value = sum();
        console.log(input.value);
    }
});

function sum(){
    let lastOne = inputArray.length - 1;
    let lastToLast = inputArray.length -2;

    currentValue = (inputArray[lastOne]) + (inputArray[lastToLast]);
    //console.log(`currentValue = ${currentValue}, arraylast = ${inputArray[lastOne]}, arrayalmostlast=${inputArray[lastToLast]}`)    
    inputArray.push(currentValue);
    return currentValue;
}

function notReadyToCalculate(){
    if(input.value === ''){
        inputArray.push(0);
    } else if (isNaN(input.value)){
        console.log(input.value);
        input.value = 'Not a Number';
    } else {
        inputArray.push(parseFloat(input.value));
    }
}