const prevElement = document.querySelector('.prev-operand')
const curElement = document.querySelector('.after-operand')
const numberElement = document.querySelectorAll('.number')
const operationElement = document.querySelectorAll('.operation')
const equalElement = document.querySelector('.equal')
const acElement = document.querySelector('.all-clear')
const ceElement = document.querySelector('.clear-entity')

let tempResult = ''
let prevNumber = ''
let curNumber = ''
let result = null
let lastOperation = ''
let haveDot = false



numberElement.forEach(number =>{
    number.addEventListener('click', (e)=>{
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true
        } else if(e.target.innerText === '.' && haveDot){
            return 
        }
        curNumber += e.target.innerText
        curElement.innerText = curNumber
    })
})

operationElement.forEach(operation =>{
    operation.addEventListener('click', (e)=>{
        if (!curNumber) result
        haveDot = false
        const operationName = e.target.innerText
        if (prevNumber && curNumber && lastOperation){
            mathOperation()
        } else {
            result = parseFloat(curNumber)
        }
        clearVar(operationName)
        lastOperation = operationName
        console.log(result)

    })
})


function clearVar(name = ''){
    prevNumber += curNumber + ' ' + name + ' '
    prevElement.innerText = prevNumber
    curElement.innerText = ''
    curNumber = ''
    tempResult = result
}

function mathOperation(){
    if(lastOperation === '*'){
        result = parseFloat(result) * parseFloat(curNumber)
    }
    else if(lastOperation === '+'){
        result = parseFloat(result) + parseFloat(curNumber)
    }
    else if(lastOperation === '-'){
        result = parseFloat(result) - parseFloat(curNumber)
    }
    else if(lastOperation === '/'){
        result = parseFloat(result) / parseFloat(curNumber)
    }
    console.log(result)
}

equalElement.addEventListener('click', (e)=> {
    if(!prevNumber || !curNumber) return
    haveDot = false
    mathOperation()
    clearVar()
    curElement.innerText = result
    curNumber = result
    prevNumber = ''
})

acElement.addEventListener('click', (e)=>{
    prevElement.innerText =''
    curElement.innerText = ''
    prevNumber = ''
    curNumber = ''
    tempResult = ''
    result = ''
})

ceElement.addEventListener('click', (e)=>{
    curElement.innerText =''
    curNumber = ''
})