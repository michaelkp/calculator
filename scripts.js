const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
    //subtract();
const multiplication = (a, b) => a * b;
   // multiply();
const division = (a, b) => a / b;
    //divide();
let operand;

let sign;

const plus = document.getElementById('plus');
    plus.addEventListener('click', () => {
        console.log('plus test')
        plus.classList.add('clicked');
        sign = ` + `;
        operand = plus.id;
        output.textContent = `${userValueA} ${sign} `;
        getUserValueB();
        
    })
    
const minus = document.getElementById('minus');
    minus.addEventListener('click', () => {
        console.log('minus test')
        minus.classList.add('clicked');
        sign = ` - `;
        operand = minus.id;
        console.log(operand)
        output.textContent = `${userValueA} ${sign} `;
    })
const multiply = document.getElementById('multiply');
    multiply.addEventListener('click', () => {
        console.log('multiply test')
        sign = ` * `;
        multiply.classList.add('clicked');
        output.textContent = `${userValueA} ${sign} `;

    })
const divide = document.getElementById('divide');
    divide.addEventListener('click', () => {
        console.log('divide test')
        sign = ` / `;
        divide.classList.add('clicked');
        output.textContent = `${userValueA} ${sign} `;

    })
let clicked = document.getElementsByClassName('clicked');
const equals = document.getElementById('equals');
    equals.addEventListener('click', () => {
        
        Array.from(clicked).map(clicked => {
            clicked.classList.remove('clicked');
            operate(clicked.id, userValueA);
            
        })
    })
const clear = document.getElementById('clear');
clear.classList.add('clicked');

    clear.addEventListener('click', () => {
        Array.from(clicked).map(clicked => {
           // clicked.classList.remove('clicked');
            operate(clicked.id, userValueA);
        })
    })

let firstNum = [];
let secondNum = [];
let userValueA;
let userValueB;
let value;
let valueB;

const output =  document.getElementById('output');


            
let operator = document.getElementsByClassName('operand')
function numbers(operand) {
    const num = document.getElementsByClassName('number');
        Array.from(num).map(num => {
            num.addEventListener('click', () => {
                 num.classList.add('first'); 
                 getUserValueA(num, operand)  
                 if (num.classList.contains('second')) {
                    getUserValueB(numbers)
                 }
                 
            })
        })
}
numbers();
function getUserValueB() {
    let num = document.getElementsByClassName('number');
    Array.from(num).map(num => {
        num.addEventListener('click', () => {
            console.log(num.value + '--num value')
        secondNum.push(num.value);
        valueB = secondNum.join('');
        userValueB = Number.parseFloat(valueB);
        output.textContent = `${userValueA} ${sign} ${userValueB}`;
        })
    })
    
}
function getUserValueA(numbers, operand) {
console.log(operand)
    
        console.log(numbers.value + ' --uservalueA')

        firstNum.push(numbers.value);
        value = firstNum.join('');
        userValueA = Number.parseFloat(value);
        output.textContent = `${userValueA}`;
    
    
}





function operate(clicked, ...args) {
    console.log(clicked)
    console.log(clicked.id)

    if(clicked === 'plus') {
        console.log(userValueA + ' --uservalue test')
        console.log(clicked +  ' ' + add(userValueA, userValueB))
    }
    if(clicked=== 'minus') {
        console.log(clicked + ' ' + subtract(userValueA, ...args))
    }
    if(clicked=== 'multiply') {
        console.log(clicked +  ' ' + multiplication(userValueA, ...args))
    }
    if(clicked === 'divide') {
        console.log(clicked +  ' ' + division(userValueA, ...args))
    }
    if(clicked === 'clear') {
        console.log('clear test')
        firstNum = [];
        secondNum = [];
        output.textContent = `0`;
        getUserValueA(numbers, operand);
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
