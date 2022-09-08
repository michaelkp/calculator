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
let numbersValue //values to populate numbers array
//let currentNumber = '' //currently diplayed number
let firstNumber = '' //previous number
let nextNumber = '' //next number to be calculated
let displayText;
//let operand;

function display(displayText) {
    const DISPLAY = document.querySelector('#display');
    DISPLAY.textContent = `${displayText}`;
}

const NUMBERS = document.querySelectorAll('.number');
      NUMBERS.forEach((numberButton) =>  numberButton.addEventListener('click', (e) => {
        numbersValue = numberButton.value; //button number value
        convertInputIntoNumbers(numbersValue);
    })
);
const NUMBER_KEYS = window.addEventListener('keydown', (e) => {
    let numberArray = ['1', '2',  '3', '4', '5', '6', '7', '8', '9', '0', '.'] 
    numbersValue = e.key; //keyboard key number value
    if (numberArray.includes(numbersValue)) convertInputIntoNumbers(numbersValue);
    if (!numberArray.includes(numbersValue));
});

function convertInputIntoNumbers(numbersValue) {
    let newNumbers = numbers.push(numbersValue);
        newNumbers = numbers.join('');
        newNumbers = parseFloat(newNumbers);
        console.log(newNumbers)
        currentNumber = newNumbers
    
     return getNumbers(currentNumber);
}

function getNumbers(currentNumber) {
    console.log(currentNumber + '--getnumbers')
    if(firstNumber !== '') {
        console.log(firstNumber + '--firstnumber in getNumbers')
        console.log(currentNumber +'--currentnumber in getNumbers')
        nextNumber = currentNumber
        console.log(nextNumber +'--nextNumber in getNumbers')
        //operate(firstNumber, nextNumber)

    }
    display(currentNumber)
}

const OPERATORS = document.querySelectorAll('.operand');
      OPERATORS.forEach((operator) =>  {
        operator.addEventListener('click', () => {
            operand = operator.value
            console.log(operand + '--operand button')
            getOperand(operand);
        })
      });

const OPERATORS_KEYS = window.addEventListener('keydown', (operator) => {
    let operandArray = ['+', '-', '*', '/'];
    if (operandArray.includes(operator.key)) {
        operand = operator.key
        getOperand(operand);
    } 
    if (!operandArray.includes(operator.key)) return console.log('error')
    
})
let operandHasValue = false

function getOperand(operand) {
    
        operandHasValue = true
        if(currentNumber !== '') {
            firstNumber = currentNumber
            currentNumber = ''
            numbers.length = 0
            console.log(firstNumber + '--firstnumer in gtoperand')
            console.log(currentNumber + '--currentNumber in gtoperand')
            console.log(operand + '--operand in gtoperand')

        }
        if(nextNumber !== '') {
            console.log(operand + '--if nextnumber has value in getoperand')
            console.log(firstNumber + '--firstNumber')
            console.log(nextNumber + '--nextnumber')

            //operate(operand)
        }
        display(operand)
} 

const EQUALS_KEY = window.addEventListener('keydown', (enter) => {
    if(enter.key === 'Enter' || enter.key === '=') {
        operate()
    } else {
        return
    }
})
const EQUALS_BTN = document.querySelector('#equals')
EQUALS_BTN.addEventListener('click', () => {
    operate()
})
function operate() {
   // console.log(operand + '--operand in operate')
    //console.log(firstNumber + '--firstNumber in operate')
    //console.log(nextNumber + '--nextNumber in operate')
    if(operand === '+') {
        console.log('add test')
            result  = (ADD(firstNumber, nextNumber))
            console.log(result + '--add result')

            operandHasValue = false
            operand = ''
            console.log(operand + '--operand ' + operandHasValue + '--boolean add result')
            
    }
    if(operand === '-') {
        console.log('add test')
            result  = (SUBTRACT(firstNumber, nextNumber))
            console.log(result + '--subtract result')

            operandHasValue = false
            operand = ''
            console.log(operand + '--operand ' + operandHasValue + '--boolean sub result')
    }
    if(operand === '*') {
        console.log('add test')
            result  = (MULTIPLY(firstNumber, nextNumber))
            console.log(result + '--multiply result')

            operandHasValue = false
            operand = ''
            console.log(operand + '--operand ' + operandHasValue + '--boolean mult result')
    }
    if(operand === '/') {
        console.log('add test')
            result  = (DIVIDE(firstNumber, nextNumber))
                        console.log(result + '--divide result')

            operandHasValue = false
            operand = ''
            console.log(operand + '--operand ' + operandHasValue + '--boolean divide result')

    }
    console.log(result + '--result operate')
    display(result)
    
}

const CLEAR = document.querySelector('#clear');
CLEAR.addEventListener('click', clearNumber(numbers));

function clearNumber(numbers) {
    numbers.splice(-1);
    //display(newNumbers)
}
