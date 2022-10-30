const ADD = (a,b) => a + b
const SUB = (a,b) => a - b
const MULT = (a,b) => a * b
const DIV = (a,b) => a / b

let number
let displayValue
let numberArray = []
let operator
let storedValue
let newValue
let storedOperator
let decimal
let calculated = false

function operate(operator, a, b) {
    
    a = parseFloat(storedValue)
    b = parseFloat(newValue)

    switch(operator) {
        case '+':
            storedValue = ADD(a, b)
            storedValue = roundNumber(storedValue)
            DISPLAY.textContent = `${storedValue}`
            break
        case '-':
            storedValue = SUB(a, b)
            storedValue = roundNumber(storedValue)
            DISPLAY.textContent = `${storedValue}`
            break
        case '*':
            storedValue = MULT(a, b)
            storedValue = roundNumber(storedValue)
            DISPLAY.textContent = `${storedValue}`
            break
        case '/':
            let errorMessage = `Error!`

            if(newValue === '0' || storedValue === '0') {
                return DISPLAY.textContent = `Error`
            } else {
                storedValue = DIV(a, b)
                storedValue = roundNumber(storedValue)
                DISPLAY.textContent = `${storedValue}`
            }
            break  
        default:
            storedValue = roundNumber(storedValue)
            DISPLAY.textContent = `${storedValue}`
    }
}

function roundNumber(storedValue) {

     storedValue = Math.round((storedValue + Number.EPSILON) * 100) / 100

     if(storedValue >= 99999999) {

         storedValue = parseFloat(storedValue).toPrecision(5)
         return storedValue
     }
     return storedValue
}

const DISPLAY = document.querySelector('#displayText')
    DISPLAY.textContent = ``

const NUMBERS_BTN = document.querySelectorAll('.number')
NUMBERS_BTN.forEach((numBtn) => {
    numBtn.addEventListener('click', () => {
        number = numBtn.value
        if(numBtn.value === '.') {
            decimal = numBtn.value
            getDecimal(decimal)
        } else {
            getNumber(number) 
        }
    })
})

const NUMBERS_KEY = window.addEventListener('keydown', (e) => {
    let numberKeyArray = ['1','2','3','4','5','6','7','8','9','0','.']
    
    if(!numberKeyArray.includes(e.key)) {
        return
    } else if(e.key === '.') {
        decimal = e.key
        getDecimal(decimal)
    } else {
        number = e.key
        getNumber(number)
        return number
    }
})

function getNumber(number, operator) {
    numberArray.push(+number)
    number = numberArray.join('')
    
    if(storedOperator !== undefined) {
    
            if(numberArray.length >= 8) {
                newValue = parseFloat(newValue).toPrecision(5)
                return newValue
            } else {
                newValue = +number
            }

        DISPLAY.textContent = `${storedOperator} ${newValue}`
        return newValue
    } else {
        if(numberArray.length >= 8) {
        storedValue = parseFloat(storedValue).toPrecision(5)
        return storedValue
    } else {
            storedValue = +number
        }

        DISPLAY.textContent = `${storedValue}`
        return storedValue
    }
}

function getDecimal() {
 
    let zeroPoint = '0' + decimal
    if(numberArray.includes(decimal) || numberArray.includes(zeroPoint)) {
        return
    } else if(numberArray.length === 0) {
        
        numberArray.push(zeroPoint)
        number = numberArray.join('')
        
        if(storedOperator !== undefined) {
            DISPLAY.textContent = `${operator} ${number}`
        } else {
            DISPLAY.textContent = `${number}`
        }

        return number
    } else {
        numberArray.push(decimal)
        number = numberArray.join('')
        if(storedOperator !== undefined) {
            DISPLAY.textContent = `${storedOperator} ${number}`
        } else {
            DISPLAY.textContent = `${number}`
        }
        return number
    }
    
}

const OPERATOR_BTN = document.querySelectorAll('.operand')
OPERATOR_BTN.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', () => {
        operator = operatorBtn.value
        getOperator(operator, storedValue, newValue)         
    })
})

const OPERATOR_KEYS = window.addEventListener('keydown', (e) =>
{
    operator = e.key
    let operatorKeyArray = ['+', '-', '*', '/']
    
    if(!operatorKeyArray.includes(operator)) {
        return
    } else {
        getOperator(operator, storedValue, newValue)
    }
})


function getOperator(operator, storedValue, newValue) {
 
    if(storedOperator !== undefined && newValue === undefined) {
        return 
    }
    
    if(storedOperator !== undefined && storedValue !== undefined) {
 
        operate(storedOperator, storedValue, newValue)
        number = undefined
        numberArray = []
        return storedOperator = operator

    } else {
        
        number = undefined
        numberArray = []
        DISPLAY.textContent = `${operator}`
        return storedOperator = operator
    }
}

const BACKSPACE_BTN = document.querySelector('#backspace')
BACKSPACE_BTN.addEventListener('click', () => {
    backspace()
})

const BACKSPACE_KEY = window.addEventListener('keydown', (e) => {
    if(e.key !== 'Backspace') {
        return
    }
    if(e.key === 'Backspace') {
        backspace()
    }
})

function backspace() {
    
    if(calculated === true) {
        return
    }
    if(storedOperator !== undefined) {
        numberArray.splice(-1)
        n = numberArray.join('')
        newValue = parseFloat(n)
        if(numberArray.length === 0) {
            newValue = 0
        }
        DISPLAY.textContent = `${operator} ${newValue}`
    } else {
        
        numberArray.splice(-1)
        n = numberArray.join('')
        storedValue = parseFloat(n)
        if(numberArray.length === 0) {
            storedValue = 0
        }
        DISPLAY.textContent = `${storedValue}`
    }
    if(numberArray.length === 0) {
        DISPLAY.textContent = `0`
    }
}


const EQUAL_BTN = document.querySelector('#equals')
EQUAL_BTN.addEventListener('click', () => {
    equals()
})
const EQUALS_KEY = window.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === '=') {
        equals()
    } else {
        return
    }

})

function equals() {
   
    if(storedValue !== undefined && storedValue !== undefined && newValue !== undefined) {
        operate(storedOperator, storedValue, newValue)
        calculated = true //set to disable further action when there is a calculated result in display
        number = undefined
        numberArray = []
        storedOperator = undefined
    }
}

const ALLCLEAR_BTN = document.querySelector('#allClear')
ALLCLEAR_BTN.addEventListener('click', () => {
    allClear()
})
const ALLCLEAR_KEY = window.addEventListener('keydown', (e) => {
    if(e.key === 'Delete') {
        allClear()
    } else {
        return
    }

})

function allClear() {
    number = undefined
    numberArray = []
    operator = undefined
    storedValue = undefined
    newValue = undefined
    storedOperator = undefined
    calculated = false
    DISPLAY.textContent = `0`
}