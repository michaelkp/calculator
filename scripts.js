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
NUMBERS.forEach(num => {
    num.addEventListener('click', (e) => {
        values.push(num.value)
        number = values.join('')
        number = parseFloat(number)
        console.log(number + '--number test')
        //getNumbers(number)
        getPrevNum(number)
    })
})

    const OPERANDS = document.querySelectorAll('.operand')
    OPERANDS.forEach(operand => {
        operand.addEventListener('click', () => {
            
            if(operated === true){
                console.log(operated + '-- operated test')
                console.log(sign + '-- operated sign test')

                console.log(nextNum + '-- operated nextNum test')
                console.log(prevNum + '-- operated prevNum test')
                sign = operand.value
                DISPLAY.textContent = `${currentNumber} ${sign}`
                
                operate(sign, prevNum, nextNum)
            } else if(calculated === true){
                sign = operand.value
                console.log(currentNumber + 'currentNum' + sign + ' ' + calculated)
                nextNum = ''
                number = ''
                values.length = 0
                DISPLAY.textContent = `${currentNumber}`
                
                getNextNum(sign)
            } else {
                sign = operand.value
                signHasValue = true
                values.length = 0
                number = ''
                DISPLAY.textContent = `${prevNum} ${sign}`
                //getNumbers(prevNum, nextNum)
                console.log(prevNum + '--getOperand prevNum test')
                console.log(sign + '--getOperand sign test')
                
                getNextNum(sign)
            }
        })
    })


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

function equals() {
    const EQUAL = document.querySelector('#equals')
    EQUAL.addEventListener('click', () => {
        //console.log('equals test')
        //console.log(sign + '--sign equals test')

        //console.log(prevNum + '--prevNum equals test')
        //console.log(nextNum + '--nextNum equals test')
        DISPLAY.textContent = `${currentNumber} ${nextNum}`
        operate(sign, prevNum, nextNum)
        
    })
    
}
equals(sign, prevNum, nextNum)

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