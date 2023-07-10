const btn_C = document.querySelector('#btn_C')
const btn_CE = document.querySelector('#btn_CE')
const btn_div = document.querySelector('#btn_div')
const btn_mult = document.querySelector('#btn_mult')
const btn_1 = document.querySelector('#btn_1')
const btn_2 = document.querySelector('#btn_2')
const btn_3 = document.querySelector('#btn_3')
const btn_min = document.querySelector('#btn_min')
const btn_4 = document.querySelector('#btn_4')
const btn_5 = document.querySelector('#btn_5')
const btn_6 = document.querySelector('#btn_6')
const btn_plus = document.querySelector('#btn_plus')
const btn_7 = document.querySelector('#btn_7')
const btn_8 = document.querySelector('#btn_8')
const btn_9 = document.querySelector('#btn_9')
const btn_equal = document.querySelector('#btn_equal')
const btn_0 = document.querySelector('#btn_0')
const btn_dot = document.querySelector('#btn_dot')
const display = document.querySelector('#display')

var operator = false 
var adds = false
var mults = false
var subs = false
var divs = false

var armz1 = ""
var armz2 = ""

function addNumber(event){
    var number = event.target.dataset.value
    display.textContent += number
    if (operator === false){
        armz1 += number
    }else{
        armz2 += number
}
}

function add(){
    display.textContent = ''
    adds = true
    operator = true
}

function mult(){
    display.textContent = ''
    mults = true
    operator = true
}

function sub(){
    display.textContent = ''
    subs = true
    operator = true
}

function div(){
    display.textContent = ''
    divs = true
    operator = true
}

function clear(){
    display.textContent = ''
    armz1 = ''
    armz2 = ''
}

function clearEntry(){
    display.textContent = ''
    armz2 = ''
}


btn_equal.addEventListener('click', () => {
    if (adds === true && operator === true){
        number1 = parseFloat(armz1)
        number2 = parseFloat(armz2)

        result = number1 + number2
        display.textContent = result
        armz1 = result
        armz2 = ''
        adds = false
        mults = false
        subs = false
        divs = false
        operator = false
    } else if (mults === true && operator === true){
        number1 = parseFloat(armz1)
        number2 = parseFloat(armz2)

        result = number1 * number2
        display.textContent = result
        armz1 = result
        armz2 = ''
        adds = false
        mults = false
        subs = false
        divs = false
        operator = false
    } else if (subs === true && operator === true){
        number1 = parseFloat(armz1)
        number2 = parseFloat(armz2)

        result = number1 - number2
        display.textContent = result
        armz1 = result
        armz2 = ''
        adds = false
        mults = false
        subs = false
        divs = false
        operator = false
    }else if (divs === true && operator === true){
        number1 = parseFloat(armz1)
        number2 = parseFloat(armz2)

        result = number1 / number2
        display.textContent = result
        armz1 = result
        armz2 = ''
        adds = false
        mults = false
        subs = false
        divs = false
        operator = false
    }
})



btn_plus.addEventListener('click', add)
btn_mult.addEventListener('click', mult)
btn_min.addEventListener('click', sub)
btn_div.addEventListener('click', div)

btn_C.addEventListener('click', clear)
btn_CE.addEventListener('click', clearEntry)

btn_1.addEventListener('click', addNumber)
btn_2.addEventListener('click', addNumber)
btn_3.addEventListener('click', addNumber)
btn_4.addEventListener('click', addNumber)
btn_5.addEventListener('click', addNumber)
btn_6.addEventListener('click', addNumber)
btn_7.addEventListener('click', addNumber)
btn_8.addEventListener('click', addNumber)
btn_9.addEventListener('click', addNumber)
btn_0.addEventListener('click', addNumber)