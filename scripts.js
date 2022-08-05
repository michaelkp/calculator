function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b ) {
    return a / b;
}
let symbol;
function operate(sign) {
    if(sign === 'plus') {
        const addValue = add(firstValue, secondValue);
        output.textContent = `${addValue}`;
    }
    if(sign === 'minus') {
        const minusValue = subtract(firstValue, secondValue);
        output.textContent = `${minusValue}`;
    }
    if(sign === 'multiply') {
        const multiplyValue = multiplication(firstValue, secondValue);
        output.textContent = `${multiplyValue}`;
    }
    if(sign === 'divide') {
        const divisionValue = division(firstValue, secondValue);
        output.textContent = `${divisionValue}`;
    }
}

let sign;

const plus = document.getElementById('plus');
    plus.addEventListener('click', () => {
        console.log('plus test')
        sign = plus.id;
        symbol = `+`;
    })
const minus = document.getElementById('minus');
    minus.addEventListener('click', () => {
        console.log('plus test')
        sign = minus.id;
        symbol = `-`;
    })
const multiply = document.getElementById('multiply');
    multiply.addEventListener('click', () => {
        console.log('plus test')
        sign = multiply.id;
        symbol = `*`;
    })
const divide = document.getElementById('divide');
    divide.addEventListener('click', () => {
        console.log('plus test')
        sign = divide.id;
        symbol = `/`;
    })
const numbers = document.getElementsByClassName('number');
const value = [];
const nextValue = [];
let firstValue;
let secondValue;

function getNumberValues(number) {
    for(let num of numbers) {
        num.addEventListener('click', () => { 
            if(operandClicked === true) {
                nextValue.push(num.value);
                getNewValue(num)
            } else {
                value.push(num.value);
                getValue(num)
            }
        })
    }
}
getNumberValues();

function getValue(num,a, b) {
    if(operandClicked === true) {
        getNewValue();
    } else {
        a = value.join('');
        b = Number.parseFloat(a);
        firstValue = b;
        display(b);
    }  
}

function getNewValue(num, x, y) {
    x = nextValue.join('');
    y = Number.parseFloat(x);
    secondValue = y;
    output.textContent = `${symbol} ${secondValue}`
}

const output = document.getElementById('display');

function display() {
    output.textContent = `${firstValue}`;
    getOperand(value)
}
let operandClicked = false;

function getOperand(value) {
    console.log(value + '--test')
    const operand = document.getElementsByClassName('operand');
    for(const button of operand) {
        button.addEventListener('click', () => {
            if(operandClicked === true) {
                value = [];
            } else {
                operandClicked = true;
                output.textContent = `${symbol}`;
            }
            if(button.id === 'equals') {
                operate(sign);
            }        
        })
    }  
}


/* come back to this later for extra credit!!!!
//get operand on key press
const operate = window.addEventListener('keydown', (e) => {
    if(e.defaultPrevented) {
        return;
    }
    switch (e.key) {
        //addition buttons
        case '+': 
        console.log(add() + ' --test');
            add();
            break;
        case 'ShiftLeft Equal':
            add();
            break;
        case 'ShiftRight Equal':
            add();
            break;
        //subtraction buttons
        case '-': 
        console.log('test sub');
            subtract();
            break;
        case 'Minus':
            subtract();
            break;
        //multiply buttons
        case '*': 
        console.log('test *');
            multiply();
            break;
        case 'ShiftLeft Digit8':
            multiply();
            break;
        case 'ShiftRight Digit8':
            multiply();
            break;
        //divide buttons
        case '/': 
        console.log(divide(99, 11) + ' --test');
            divide();
            break;
        case 'Slash':
            divide();
            break;
        //enter buttons
        case 'Enter': 
        console.log('test enter');
            divide();
            break;
        case 'NumpadEnter':
            divide();
            break;
        //equals
        case '=': 
        console.log('test equal');
            break;
       
        default:
            console.log('nope')
    }
});
*/
