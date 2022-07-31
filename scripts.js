const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
    //subtract();
const multiplication = (a, b) => a * b;
   // multiply();
const division = (a, b) => a / b;
    //divide();
let operandId;
let operand;

const plus = document.getElementById('plus');
    plus.addEventListener('click', () => {
        console.log('plus test')
        plus.classList.add('clicked');

    })
const minus = document.getElementById('minus');
    minus.addEventListener('click', () => {
        console.log('minus test')
        minus.classList.add('clicked');
    })
const multiply = document.getElementById('multiply');
    multiply.addEventListener('click', () => {
        console.log('multiply test')
        multiply.classList.add('clicked');

    })
const divide = document.getElementById('divide');
    divide.addEventListener('click', () => {
        console.log('divide test')
        divide.classList.add('clicked');

    })

const enter = document.getElementById('enter');
    enter.addEventListener('click', () => {
        let clicked = document.getElementsByClassName('clicked');
        Array.from(clicked).map(clicked => {
            clicked.classList.remove('clicked');
            operate(clicked.id, userValue);
        })
    })


let firstNum = [];
let secondNum = [];
let userValue;
let value;

const output =  document.getElementById('output');
const numbers = document.getElementsByClassName('number');
    Array.from(numbers).map(numbers => {
        numbers.addEventListener('click', () => {
            firstNum.push(numbers.value);
            value = firstNum.join('');
            userValue = Number.parseFloat(value);
            console.log(typeof userValue)
            console.log(userValue + ' userValue numbers')
            output.textContent = `${firstNum.join('')}`;
            return userValue;
        })
    })

function operate(clicked, ...args) {
    
    if(clicked === 'plus') {
        console.log(userValue + ' --uservalue test')
        console.log(clicked +  ' ' + add(userValue, ...args))
    }
    if(clicked=== 'minus') {
        console.log(clicked + ' ' + subtract(userValue, ...args))
    }
    if(clicked=== 'multiply') {
        console.log(clicked +  ' ' + multiplication(userValue, ...args))
    }
    if(clicked === 'divide') {
        console.log(clicked +  ' ' + division(userValue, ...args))
    }
    if(clicked === 'clear') {
        firstNum = [];
        output.textContent = `test: `;
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
