function add(a, b) {
    return a + b
}
function sub(a, b) {
    return a - b
}
function mult(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b
}

let number = ''
let sign = ''

const NUMBERS = document.querySelectorAll('.number')
NUMBERS.forEach(num => {
    num.addEventListener('click', (e) => {
        number = num.value
        console.log(number + '--number test')
        DISPLAY.textContent = number

    })
})

const OPERANDS = document.querySelectorAll('.operand')
OPERANDS.forEach(operand => {
    operand.addEventListener('click', (e) => {
        sign = operand.value
        console.log(sign + '--sign test')
        DISPLAY.textContent = sign
    })
})

const DISPLAY = document.querySelector('#display')
console.log(number + '--display test')

function operate(prevNum, nextNum) {
    if(sign === '+') {
        console.log(add(prevNum, nextNum) + ' --add test')
    }
    if(sign === '-') {
        console.log(sub(prevNum, nextNum) + ' --add test')
    }
    if(sign === '*') {
        console.log(mult(prevNum, nextNum) + ' --add test')
    }
    if(sign === '/') {
        console.log(divide(prevNum, nextNum) + ' --add test')
    }
}