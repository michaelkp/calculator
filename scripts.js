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


const numbers = document.getElementsByClassName('number');
const value = [];
const nextValue = [];

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
        console.log(num + '--num  value ')

        a = value.join('');
        b = Number.parseFloat(a);
        display(b)
    }  
}

function getNewValue(num, x, y) {
    x = nextValue.join('');
    y = Number.parseFloat(x);
    display(y)
    console.log(num + '--num new value ')

    console.log(nextValue + '--new value ')

    console.log(y + '--new value ')
}
const output = document.getElementById('display');

function display(num) {
    output.textContent = `${num}`;
    //console.log(value)
    getOperand(value)

    return value;
}
let operandClicked = false;

const numbersToCalculate = [];
//make sign function then add to display text content

function getOperand(value) {
    console.log(value + '--test')
    const operand = document.getElementsByClassName('operand');
    for(const sign of operand) {
        sign.addEventListener('click', () => {
            console.log( operandClicked + 'operandClicked before test')
            if(operandClicked === true) {
                value = [];
                console.log( operandClicked + 'operandClicked sfter test')
                console.log(value + ' true test')
        } else {
            console.log(sign.id)
            console.log(value + '--getOperand test')
            operandClicked = true;
            output.textContent = 0;
            
            console.log(operandClicked)
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
