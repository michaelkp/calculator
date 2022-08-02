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

function operate(operand) {
    if(plus) {
        add();
    }
    if(minus) {
        subtract();
    }
    if(multiply) {
        multiplication();
    }
    if(divide) {
        division();
    }
}
operate(2,3)

const numbers = document.getElementsByClassName('number');
const value = [];

for(let num of numbers) {
        num.addEventListener('click', () => { 
            value.push(num.value);
            getValue(num)
        })
    }

function getValue(num) {
    let x = value.join('');
    let y = Number.parseFloat(x);
    display(y)
}

function display(value) {
    const output = document.getElementById('display');
    output.textContent = `${value}`;
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
