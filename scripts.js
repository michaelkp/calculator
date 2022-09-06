const ADD = (a, b) => {
    return a + b;
};
const SUBTRACT = (a, b) => {
    return a - b;
};
const MULTIPLY = (a, b) => {
    return a * b;
};
const DIVIDE = (a, b) => {
    return a / b;
};
let numbers = []; //collect keyboard and button values in array then join() to remove commas and spaces, then use parsefloat() to display an integer
//let currentNumber = '' //currently diplayed number
let prevNumber = '' //previous number
let nextNumber = '' //next number to be calculated
let displayText;

function display(displayText) {
    let output = document.querySelector('#display');
    output.textContent = `${displayText}`;
}
const NUMBERS = document.querySelectorAll('.number');
      NUMBERS.forEach((numberButton) =>  numberButton.addEventListener('click', (e) => {
        let numberBtnValue = numberButton.value; //button number value
        convertInputIntoNumbers(numberBtnValue);
    })
);
const NUMBER_KEYS = window.addEventListener('keydown', (e) => {
    let numberArray = ['1', '2',  '3', '4', '5', '6', '7', '8', '9', '0', '.'] 
    let numberKeyValue = e.key; //keyboard key number value
    if (numberArray.includes(numberKeyValue)) convertInputIntoNumbers(numberKeyValue);
    if (!numberArray.includes(numberKeyValue));
});

function convertInputIntoNumbers(numberBtnValue, numberKeyValue) {
    let newNumbers;

    if(numberBtnValue) {
        newNumbers = numbers.push(numberBtnValue);
        newNumbers = numbers.join('');
        newNumbers = parseFloat(newNumbers);
        console.log(newNumbers)
        displayText = newNumbers
        display(displayText)
    };
    if(numberKeyValue) {
        newNumbers = numbers.push(numberKeyValue);
        newNumbers = numbers.join('');
        newNumbers = parseFloat(newNumbers);
        console.log(newNumbers)
        displayText = newNumbers
        display(displayText)
     };
     return getNumbers(displayText);
}

function getNumbers(displayText) {
    let currentNumber = displayText;
    console.log(currentNumber + '--getnumbers')
}

const OPERATORS = document.querySelectorAll('.operand');
      OPERATORS.forEach((operator) =>  {
        operator.addEventListener('click', () => {
            let operand = operator.value
            getOperand(operand);
        })
      });

const OPERATORS_KEYS = window.addEventListener('keydown', (e) => {
    let operandArray = ['+', '-', '*', '/'];
    let operandKey = e.key;
    if (operandArray.includes(operandKey)) getOperand(operandKey);
})

function getOperand(operand, operandKey) {
    let operandHasValue = false
    if(operand){   
        operandHasValue = true
        display(operand)};
    if(operandKey){
        operandHasValue = true
        display(operandKey)};
} 

const OPERATE = (a, b) => {
    switch(a, b) {
        case '+':
            ADD(a, b)
            break;
        case '-':
            SUBTRACT(a, b)
            break;
        case '*':
            MULTIPLY(a, b)
            break;
        case '/':
            DIVIDE(a, b)
            break;
    }
}

const CLEAR = document.querySelector('#clear');
CLEAR.addEventListener('click', clearNumber(numbers));

function clearNumber(numbers) {
    numbers.splice(-1);
    //display(newNumbers)
}
