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

let values = []
let sign = ''
let number = ''
let prevNum = ''
let nextNum = ''
let currentNumber = 0
let signHasValue = false
let operated = false
let calculated = false

const DISPLAY = document.querySelector('#display')
DISPLAY.textContent = `${currentNumber}`

const NUMBERS = document.querySelectorAll('.number')
NUMBERS.forEach(num => getNumbers(num))
window.addEventListener('keydown', (e) => {
    const KB_NUM = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
    if(KB_NUM.includes(e.key)) {
        console.log(e.key + ' key test')
        values.push(e.key)
        number = values.join('')
        number = parseFloat(number)
        getPrevNum(number)
    } else if (!KB_NUM.includes(e.key)){
        console.log('nan')
        return
    }
})

function getNumbers(num) {
    num.addEventListener('click', (e) => {
        values.push(num.value)
        number = values.join('')
        number = parseFloat(number)
        console.log(number + '--number test')
        getPrevNum(number)
    })
}

const OPERANDS = document.querySelectorAll('.operand')
OPERANDS.forEach(operand => {
    operand.addEventListener('click', () => {
        sign = operand.value
        getOperand(sign)
    })
})

window.addEventListener('keydown', (e) => {
    const KB_SIGN = ['+', '-', '*', '/']
    if(KB_SIGN.includes(e.key)) {
        sign = e.key
        console.log(sign + '--kbsign test')
        getOperand(sign)
    } else if(!KB_SIGN.includes(e.key)){
        return
    }
})

function getOperand(sign, operand) {
    
        if(operated === true){
            console.log(operated + '-- operated test')
            console.log(sign + '-- operated sign test')
            console.log(nextNum + '-- operated nextNum test')
            console.log(prevNum + '-- operated prevNum test')
            //sign = operand.value
            DISPLAY.textContent = `${currentNumber} ${sign}`
            operate(sign, prevNum, nextNum)
        } else if(calculated === true){
            //sign = operand.value
            console.log(currentNumber + 'currentNum' + sign + ' ' + calculated)
            nextNum = ''
            number = ''
            values.length = 0
            DISPLAY.textContent = `${currentNumber}`
            getNextNum(sign)
            } else {
                //sign = operand.value
                signHasValue = true
                values.length = 0
                number = ''
                DISPLAY.textContent = `${prevNum} ${sign}`
                //getNumbers(prevNum, nextNum)
                console.log(prevNum + '--getOperand prevNum test')
                console.log(sign + '--getOperand sign test')
                getNextNum(sign)
            }
        
}

const EQUAL = document.querySelector('#equals')
EQUAL.addEventListener('click', equals)
window.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === '=') {
        equals()
    } else {
        return
    }
})

function equals() {
    DISPLAY.textContent = `${currentNumber} ${nextNum}`
    operate(sign, prevNum, nextNum)
}

const CLEAR = document.querySelector('#clear')
CLEAR.addEventListener('click', clearNumber)
window.addEventListener('keydown', (e) => {
    if(e.key === 'Backspace') {
        clearNumber()
    }
})


function clearNumber() {
    if(operated === true){
        console.log(nextNum + '--clear nextNum test')
        values.splice(-1)
        number = values.join('')
        number = parseFloat(number)
        nextNum = number
        DISPLAY.textContent = `${nextNum}`
        return nextNum
    } else {
        console.log(prevNum + '--clear prevNum test')
        values.splice(-1)
        number = values.join('')
        number = parseFloat(number)
        prevNum = number
        DISPLAY.textContent = `${prevNum}`
        return prevNum
    }
}

const ALL_CLEAR = document.querySelector('#ac')
ALL_CLEAR.addEventListener('click', allClear)
window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
        console.log(e.key + '-- all clear')
        allClear()
    }
})
function allClear(e) {
    calculated = false
    operated = false
    signHasValue = false
    values.length = 0
    number = ''
    prevNum = ''
    nextNum = ''
    currentNumber = ''
    DISPLAY.textContent = 0
}

function getPrevNum() {
    console.log(number + '--getPrevNum number test')
    if(signHasValue === true || calculated === true) {
        console.log(calculated + '--getPrevNum calculated')
        getNextNum(sign)
    } else {
        prevNum = number
        DISPLAY.textContent = `${prevNum}`
        console.log(prevNum + '--getPrevNum prevNum test')
        //getOperand(sign, prevNum, nextNum)
        return prevNum
    }
}

function getNextNum() {
    
    console.log(number + '--getNextNum number test')
    console.log(prevNum + '--getNextNum prevNum test')

    console.log(sign + '--getNextNum sign test')
    operated = true
    nextNum = number
    DISPLAY.textContent = `${sign} ${nextNum}`
    console.log(nextNum + '--getNextNum nextNum test')
    //equals()
}

function operate(sign, prevNum, nextNum) {
    console.log(sign + '--operate sign test')
    console.log(prevNum + '--prevNum operate test')
    console.log(nextNum + '--nextNum operate test')

    if(sign === '+') {
        if(calculated === true){
            currentNumber = add(currentNumber, nextNum)
            nextNum = ''
            prevNum = ''
            values.length = 0
            operated = false
            console.log(calculated + '--calculated add test')

            DISPLAY.textContent = `${currentNumber}`
        } else {
            console.log(prevNum + '--add prevNum test')
            console.log(nextNum + '--add nextNum test')
            currentNumber = add(prevNum, nextNum)
            DISPLAY.textContent = `${currentNumber}`
            calculated = true
            operated = false
            //prevNum = currentNumber
            console.log(currentNumber + '--add prevNum = currentNUmber')
            nextNum = ''
            prevNum = ''

            values.length = 0
            //return prevNum
        }
    }
    if(sign === '-') {
        if(calculated === true){
            currentNumber = sub(currentNumber, nextNum)
            nextNum = ''
            prevNum = ''
            values.length = 0
            operated = false
            console.log(calculated + '--calculated sub test')

            DISPLAY.textContent = `${currentNumber}`
        } else {
            console.log(prevNum + '--sub prevNum test')
            console.log(nextNum + '--sub nextNum test')
            currentNumber = sub(prevNum, nextNum)
            DISPLAY.textContent = `${currentNumber}`
            calculated = true
            operated = false
            //prevNum = currentNumber
            console.log(currentNumber + '--sub prevNum = currentNUmber')
            nextNum = ''
            prevNum = ''

            values.length = 0
            //return prevNum
        }   
     }
    if(sign === '*') {
        if(calculated === true){
            currentNumber = mult(currentNumber, nextNum)
            nextNum = ''
            prevNum = ''
            values.length = 0
            operated = false
            console.log(calculated + '--calculated mult test')

            DISPLAY.textContent = `${currentNumber}`
        } else {
            console.log(sign + '-- mult sign test')
            console.log(prevNum + '--mult prevNum test')
            console.log(nextNum + '--mult nextNum test')
            currentNumber = mult(prevNum, nextNum)
            DISPLAY.textContent = `${currentNumber}`
            calculated = true
            operated = false
            //prevNum = currentNumber
            console.log(currentNumber + '--mult prevNum = currentNUmber')
            nextNum = ''
            prevNum = ''

            values.length = 0
            //return prevNum
        }    
    }
    if(sign === '/' && prevNum === 0 || sign === '/' && nextNum === 0) {
        console.log('divide by zero')
        DISPLAY.textContent = 'ERROR'
        return
    }
    if(sign === '/') {
        
        if(calculated === true){
            currentNumber = divide(currentNumber, nextNum)
            nextNum = ''
            prevNum = ''
            values.length = 0
            operated = false
            console.log(calculated + '--calculated div test')

            DISPLAY.textContent = `${currentNumber}`
        } else {
            console.log(sign + '-- div sign test')
            console.log(prevNum + '--div prevNum test')
            console.log(nextNum + '--div nextNum test')
            currentNumber = divide(prevNum, nextNum)
            DISPLAY.textContent = `${currentNumber}`
            calculated = true
            operated = false
            //prevNum = currentNumber
            console.log(currentNumber + '--div prevNum = currentNUmber')
            nextNum = ''
            prevNum = ''

            values.length = 0
            //return prevNum
        }    
    }
}

