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

function operate(operator, a, b) {
    console.log('---CALCULATE!!!---')
    console.log(operator + ' -- operator in operate')

    
    a = parseFloat(storedValue)
    b = parseFloat(newValue)
    console.log(typeof(a) + a + ' -- a in operate')
    console.log(typeof(b) + b + ' -- b in operate')
    switch(operator) {
        case '+':
            //storedValue
            //console.log(storedValue + ' --storedValue in OPERATE')
            storedValue = ADD(a, b)
            console.log(storedValue + '--storedvalue ADD')
            storedValue = roundNumber(storedValue)
            DISPLAY.textContent = `${storedValue}`
 
            //display(roundNumber(storedValue))
            //newValue = undefined
            break
        case '-':
            storedValue = SUB(a, b)
            //roundNumber(storedValue)
            storedValue = roundNumber(storedValue)
            DISPLAY.textContent = `${storedValue}`
            //display(roundNumber(storedValue))
            break
        case '*':
            storedValue = MULT(a, b)
            //roundNumber(storedValue)
            storedValue = roundNumber(storedValue)
            DISPLAY.textContent = `${storedValue}`
            //display(roundNumber(storedValue))
            break
        case '/':
            console.log('---DIVIDE---')
            console.log(storedValue + ' --storedvalue')
            console.log(newValue + ' --newValue')
            let errorMessage = `Error!`

            if(newValue === '0' || storedValue === '0') {
                console.log('newvalue')
                //return display(errorMessage)
                return DISPLAY.textContent = `Error`
            } else {
                console.log('else')

                storedValue = DIV(a, b)
                //roundNumber(storedValue)
                storedValue = roundNumber(storedValue)
                DISPLAY.textContent = `${storedValue}`
                //display(roundNumber(storedValue))
            }
            break  
        default:
            storedValue = roundNumber(storedValue)
            DISPLAY.textContent = `${storedValue}`
            //display(roundNumber(storedValue)) 
    }
}
function roundNumber(storedValue) {
    console.log('---ROUND---')
     storedValue = Math.round((storedValue + Number.EPSILON) * 100) / 100
     console.log(storedValue + ' --YYYYYYYYY')
     if(storedValue >= 99999999) {
        console.log('OOOOOOOOO')
         storedValue = parseFloat(storedValue).toPrecision(5)
         console.log(storedValue + ' --YYYYYYYYY')

         return storedValue
     }
     return storedValue
}
let decimal

const DISPLAY = document.querySelector('#displayText')
    DISPLAY.textContent = ``
/*function display(storedValue, storedOperator, operator, newValue) {
    const DISPLAY = document.querySelector('#displayText')
    DISPLAY.textContent = `${storedValue}`
    console.log('%c---DISPLAY---', 'background-color: blue; color: white;')
    console.log(decimal + ' ' + typeof(decimal) +  ' --deciaml in display')

    console.log(storedValue + ' --storedValue in display')
    console.log(newValue + ' --newValue in display')

    console.log(operator + ' --operator in display')
    console.log(displayValue + ' --displayvalue')
    if(newValue !== undefined) {
        console.log('---DISPLAY NEWVALUE')
        DISPLAY.textContent = `${storedValue} ${operator} ${newValue}`
    } else if(storedOperator !== undefined) {
        console.log('---DISPLAY OPERATOR')
        DISPLAY.textContent = `${storedValue} ${storedOperator}`
    } else if(operator !== undefined) {
        console.log('---DISPLAY OPERATOR')
        DISPLAY.textContent = `${storedValue} ${operator}`
    } else {
        console.log('---DISPLAY DEFAULT')
        DISPLAY.textContent = `${storedValue}`
    }

}*/

const NUMBERS_BTN = document.querySelectorAll('.number')
NUMBERS_BTN.forEach((numBtn) => {
    numBtn.addEventListener('click', () => {
        console.log(numBtn.value + ' --numBtn value')
        number = numBtn.value
        if(numBtn.value === '.') {
            console.log('---DECIMAL---')
            decimal = numBtn.value
            getDecimal(decimal)
        } else {
            getNumber(number) 
        }
    })
})

const NUMBERS_KEY = window.addEventListener('keydown', (e) => {
    let numberKeyArray = ['1','2','3','4','5','6','7','8','9','0','.']
    
    console.log(e.key + ' -- ekey')
    if(!numberKeyArray.includes(e.key)) {
        return console.log('ERROR, Not a number!')
    } else if(e.key === '.') {
        decimal = e.key
        console.log(decimal + ' --decimal')
        getDecimal(decimal)
    } else {
        number = e.key
        console.log(number + ' --numberKey value')
        getNumber(number)
        return number
    }
})

function getNumber(number, operator) {
    console.log('%c---GET NUMBER---','background-color:green; color: white;')
    numberArray.push(+number)
    number = numberArray.join('')
    //number = parseFloat(n)
    console.log(number + ' --number in getNumber')
    console.log(typeof(number) + '-- typeof number')
    //display(number) //display current number
/*
    if(numberArray.length >= 9) {
        console.log('---LARGE NUMBER---')
        //number = parseFloat(number)
        //number = number.toFixed(2)
        console.log(roundNumber(number))
        number = +roundNumber(number)
        console.log(number + ' --rounded number')
    }*/

    if(storedOperator !== undefined) {
        console.log('---NEWVALUE---')
        console.log(number + ' --number in NEWVALUE')
       /* if(numberArray.length >= 8) {
            console.log('TTTTTTTTTTTTTTTTTTT')
            newValue = Math.round((newValue + Number.EPSILON) * 100) /100
            console.log(newValue + ' --rounded newValue')
        } */if(numberArray.length >= 8) {
        console.log('OOOOOOOOO')
        newValue = parseFloat(newValue).toPrecision(5)
        console.log(newValue + ' --YYYYYYYYY')

        return newValue
    } else {
            newValue = +number

        }

        //display(newValue)
        console.log(operator + ' --operator in newvalue')
        DISPLAY.textContent = `${storedOperator} ${newValue}`

        return newValue
    } else {
        console.log('---STOREDVALUE---')
        console.log(number + ' --number in STOREDVALUE')

        /*if(numberArray.length >= 8) {
            console.log('FFFFFFFFFFFFFFFFFFFFF')
            storedValue = Math.round((storedValue + Number.EPSILON) * 100) /100
            console.log(storedValue + ' --rounded storeValue')
        }*/if(numberArray.length >= 8) {
        console.log('OOOOOOOOO')
        storedValue = parseFloat(storedValue).toPrecision(5)
        console.log(storedValue + ' --YYYYYYYYY')

        return storedValue
    } else {
            storedValue = +number

        }

        console.log(typeof(storedValue) + '-- typeof number')

        //numberHasDecimal = false
        //display(storedValue)
        DISPLAY.textContent = `${storedValue}`

        return storedValue
    }
    //storedValue = number //store the number to use in operate
     console.log(storedValue + ' --storedValue in getNum')
}

function getDecimal() {
    console.log('%c---DECIAML FUNCTION---','background-color: yellow;')
    console.log(decimal + ' number in getDecimal')
    console.log(number + ' --number in deciaml')
    console.log(numberArray + ' --numberArray in getDecimal')
    //decimal = number
    //display(number)
    let zeroPoint = '0' + decimal
    if(numberArray.includes(decimal) || numberArray.includes(zeroPoint)) {
        console.log(number + ' --decimal included')
        return console.log('%cERROR', 'color: red;')
    } else if(numberArray.length === 0) {
        //numberHasDecimal = true
        console.log('PPPPPPPPPPPPPPPPP')
        //console.log(numberHasDecimal + ' --has decimal')
        numberArray.push(zeroPoint)
        number = numberArray.join('')
        console.log(number + ' --number in decimal')
        console.log(decimal + ' --decimal in decimal')

        //number = zeroPoint
        console.log(storedValue + ' --storedValue in decimal')
        console.log(newValue + ' --newValue in decimal')

        console.log(numberArray + ' --numberArray')
        console.log(number + ' --number in decimal')
        //getNumber(number)
        //display(number)

        if(storedOperator !== undefined) {
            console.log(operator + decimal + ' --HHHHHHHH')
            DISPLAY.textContent = `${operator} ${number}`
        } else {
            console.log('--IIIIIIIII---')
            DISPLAY.textContent = `${number}`
        }

        return number
    } else {
        console.log('KKKKKKKKKKKKK')
        numberArray.push(decimal)
        number = numberArray.join('')
        console.log(number + ' --has decimal')
        //display(number)
        if(storedOperator !== undefined) {
            console.log(operator + decimal + ' --HHHHHHHH')
            DISPLAY.textContent = `${storedOperator} ${number}`
        } else {
            console.log('--IIIIIIIII---')
            DISPLAY.textContent = `${number}`
        }
        //DISPLAY.textContent = `${number}`

        //getNumber(number)
        return number
    }
    
}

const OPERATOR_BTN = document.querySelectorAll('.operand')
OPERATOR_BTN.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', () => {
        console.log(operatorBtn.value + ' --operatoreBtn value')
        operator = operatorBtn.value
        //storedOperator = operator
        //display(operator)
        getOperator(operator, storedValue, newValue)
        //storedOperator = operator
         
    })
})

const OPERATOR_KEYS = window.addEventListener('keydown', (e) =>
{
    operator = e.key
    let operatorKeyArray = ['+', '-', '*', '/']
    
    if(!operatorKeyArray.includes(operator)) {
        return console.log('ERROR, Not an operator!')
    } else {
        getOperator(operator, storedValue, newValue)
    }
})


function getOperator(operator, storedValue, newValue) {
        console.log('---OPERATE---')
        console.log(storedOperator + ' --storedOperator') 
        console.log(storedValue + ' --storedValue')

        console.log(displayValue + ' --displayValue')

        console.log(newValue + ' --newValue')

        console.log('---TYPEOF in getOP---')
        console.log(typeof(storedValue) + ' --typeof storevalue')
        console.log(typeof(newValue) + ' --typeof newValue')
    if(storedOperator !== undefined && newValue === undefined) {
        console.log('---TWO OPERATORS ERROR---')
        return 
    }
    
    if(storedOperator !== undefined && storedValue !== undefined) {
        
        console.log('%c ---operate---', 'background-color: red; color: black; font-weight: bold;')
        console.log(storedOperator + ' --storedOperator')
        console.log(storedValue + ' --storedValue')
        console.log(newValue + ' --newValue')
        console.log(operator + ' -- new operator')
        operate(storedOperator, storedValue, newValue)
        //operator = undefined
        number = undefined
        numberArray = []
        //newValue = undefined
        //storedValue = undefined
        //display(operator)
        //clearValues(number, numberArray)
        console.log('---RESULT---')
        console.log(storedValue + ' --result in getoperate')
        return storedOperator = operator

    } else {
        //storedOperator = operator
        //clearValues()
        //displayValue = undefined
        console.log(operator + ' -- new operator')
        console.log(number + ' -- clear number')

        //storedValue = parseFloat(number)
        console.log(typeof(storedValue) + ' --typeof storevalue')
        console.log(typeof(number) + ' --typeof number')

        number = undefined
        numberArray = []
        //clearValues(number, numberArray)
        console.log(number + ' -- clear number')
        //display(operator)
        DISPLAY.textContent = `${operator}`

        console.log(operator + ' --operatore in getOp')
        console.log(storedValue  + ' --storedValue in getOp')
        return storedOperator = operator

    }
}

const BACKSPACE_BTN = document.querySelector('#backspace')
BACKSPACE_BTN.addEventListener('click', () => {
    console.log('---BACKSPACE BTN---')
    backspace()
})

const BACKSPACE_KEY = window.addEventListener('keydown', (e) => {
    if(e.key !== 'Backspace') {
        return
    }
    if(e.key === 'Backspace') {
        console.log('---BACKSPACE KEY---')

        backspace()
    }
})

function backspace() {
    console.log('---BACKSPACE FUNCTON---')
    console.log(calculated + ' --calculated in backspace')
    //numberArray.splice(-1)
    //n = numberArray.join('')
    /////displayValue = parseFloat(n)
    //display(displayValue)
    //console.log(numberArray + ' --number in bcakspace')
    //if displayvalue === storedvalue
    //or if displayvalue === newvalue
    if(calculated === true) {
        console.log('---backspace calculated---')
        return
    }
    if(storedOperator !== undefined) {
        console.log(newValue + ' -- backspace if newvalue')
        numberArray.splice(-1)
        n = numberArray.join('')
        newValue = parseFloat(n)
        if(numberArray.length === 0) {
            //displayValue 
            newValue = 0
            //display(newValue = 0)
            console.log(displayValue + ' --number in bcakspace')
        }
        //display(newValue)
        DISPLAY.textContent = `${operator} ${newValue}`

        //return newValue
    } else {
        console.log('GGGGGGGGGGGGGGG')
        console.log(numberArray + ' --numberArray')
        console.log(storedValue + ' -- backspace if storedvalue')
        numberArray.splice(-1)
        n = numberArray.join('')
        storedValue = parseFloat(n)
        console.log(storedValue + ' --storedvalue')
        if(numberArray.length === 0) {
            //displayValue 
            storedValue = 0
            //display(storedValue = 0)
            console.log(displayValue + ' --number in bcakspace')
        }

        //display(storedValue)
        DISPLAY.textContent = `${storedValue}`

        //return storedValue
    }
    if(numberArray.length === 0) {
        //displayValue 
        //display(displayValue = 0)
        DISPLAY.textContent = `0`

        console.log(displayValue + ' --number in bcakspace')
    }
}


const EQUAL_BTN = document.querySelector('#equals')
EQUAL_BTN.addEventListener('click', () => {
    equals()
})
const EQUALS_KEY = window.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === '=') {
       console.log(e.key + ' --enterKey ')
        equals()
    } else {
        return
    }

})
let calculated = false
function equals() {
    console.log('---Equals Function---')
    console.log(calculated + ' --calculated')

    console.log(storedOperator + ' --storedOperator')
        console.log(storedValue + ' --storedValue')
        console.log(newValue + ' --newValue')
        //console.log(operator + ' -- new operator')
    if(storedValue !== undefined && storedValue !== undefined && newValue !== undefined) {
        console.log('---EQUALS---')
        operate(storedOperator, storedValue, newValue)
        calculated = true //set to disable further action when there is a calculated result in display
        number = undefined
        numberArray = []
        storedOperator = undefined
        //operator = undefined
    }
}

const ALLCLEAR_BTN = document.querySelector('#allClear')
ALLCLEAR_BTN.addEventListener('click', () => {
    allClear()
})
const ALLCLEAR_KEY = window.addEventListener('keydown', (e) => {
    if(e.key === 'Delete') {
       console.log(e.key + ' --allClear ')
        allClear()
    } else {
        return
    }

})

function allClear() {
    console.log('---ALL CLEAR---')
    number = undefined
    numberArray = []
    operator = undefined
    storedValue = undefined
    newValue = undefined
    storedOperator = undefined
    //display(storedValue = 0)
    DISPLAY.textContent = `0`

}