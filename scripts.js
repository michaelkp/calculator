const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
    subtract();
const multiply = (a, b) => a * b;
    multiply();
const divide = (a, b) => a / b;
    divide();

const operands = document.getElementsByClassName('operand') 
      Array.from(operands).map(operands => {
        operands.addEventListener('click', () => {
            operate(operands.id, 1223, 123);
        })
    })

const numbers = document.getElementsByClassName('number');
    Array.from(numbers).map(numbers => {
        numbers.addEventListener('click', () => {
            //operate(numbers.id);
            console.log(numbers.value + ' --numbers test')
        })
    })

function operate(operands, ...args) {
    
    if(operands === 'plus') {
        console.log(operands +  ' ' + add(...args))
    }
    if(operands=== 'minus') {
        console.log(operands + ' ' + subtract(...args))
    }
    if(operands=== 'multiply') {
        console.log(operands +  ' ' + multiply(...args))
    }
    if(operands === 'divide') {
        console.log(operands +  ' ' + divide(...args))
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
