var btn_C = document.querySelector('#btn_C')
var btn_CE = document.querySelector('#btn_CE')
var btn_div = document.querySelector('#btn_div')
var btn_mult = document.querySelector('#btn_mult')
var btn_1 = document.querySelector('#btn_1')
var btn_2 = document.querySelector('#btn_2')
var btn_3 = document.querySelector('#btn_3')
var btn_min = document.querySelector('#btn_min')
var btn_4 = document.querySelector('#btn_4')
var btn_5 = document.querySelector('#btn_5')
var btn_6 = document.querySelector('#btn_6')
var btn_plus = document.querySelector('#btn_plus')
var btn_7 = document.querySelector('#btn_7')
var btn_8 = document.querySelector('#btn_8')
var btn_9 = document.querySelector('#btn_9')
var btn_equal = document.querySelector('#btn_equal')
var btn_0 = document.querySelector('#btn_0')
var btn_dot = document.querySelector('#btn_dot')

var display = document.querySelector('#display')

function addNumber(event){
    var number = event.target.dataset.value
    display.textContent += number
    armz += number
}

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