const add = (a, b) => a + b;
    add();
const subtract = (a, b) => a - b;
    subtract();
const multiply = (a, b) => a * b;
    multiply();
const divide = (a, b) => a / b;
    divide();

//get operand on key press
let keys = window.addEventListener('keydown', (e) => {
    if(e.defaultPrevented) {
        return;
    }
    //console.log(e)
    switch (e.key) {
        //addition buttons
        case '+': 
        console.log('test');
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
        console.log('test /');
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
        
        default:
            console.log('nope')
    }
});
function operate(a, b) {
    //let  + = add(a, b);
}
operate();