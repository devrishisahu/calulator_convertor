const display = document.querySelector('#display')
const displayTwo = document.querySelector('#displayTwo')
const changer = document.querySelector('#changer')
const shiftBox = document.querySelector('#shiftBox')
const currencyOne = document.querySelector('#currencyOne')
const currencyTwo = document.querySelector('#currencyTwo')
const currencyCode = document.querySelector('#currencyCode')
const currencyCodeTwo = document.querySelector('#currencyCodeTwo')
const currencyDisplayTwo = document.querySelector('#currencyDisplayTwo')
const currencyDisplay = document.querySelector('#currencyDisplay')
const hideBtn = document.querySelector('#hideBtn')
const gameDisplay = document.querySelector('#gameDisplay')
let button = document.querySelectorAll('button')
let calculatorDisplay = document.querySelector('#calculatorDisplay')
let gameScreen = document.querySelector('#gameScreen')


function appendToDisplay(input) {
    display.value += input;
    displayTwo.value += input;
    currencyDisplay.value += input;
    currencyDisplayTwo.value = currencyDisplayTwo.popover
}

function Calculate() {
    calc = eval(display.value)
    display.value = calc

    currencyConverter()

}

function clearDisplay() {
    display.value = display.popover
    currencyDisplay.value = display.popover
    currencyDisplayTwo.value = display.popover

}

function popValue() {

    poping = display.value.split('')
    poping.pop()
    popped = poping.join('')
    display.value = popped

    currencyDisplayTwo.value = currencyDisplayTwo.popover

    currpoping = currencyDisplay.value.split('')
    currpoping.pop()
    currpopped = currpoping.join('')
    currencyDisplay.value = currpopped
}

function selectCountry() {

    currencyDisplay.value = currencyDisplay.popover
    currencyDisplayTwo.value = currencyDisplayTwo.popover
    currencyCode.innerText = currencyOne.value
    currencyCodeTwo.innerText = currencyTwo.value

}

function changeDisplay() {

    display.value = display.popover
    currencyDisplay.value = currencyDisplay.popover
    currencyDisplayTwo.value = currencyDisplayTwo.popover

    if (changer.checked) {
        hideBtn.className = "bg-lime-300 h-15 w-15 rounded-4xl  hover:bg-lime-200 active:bg-lime-100 text-xl font-semibold hidden"
        gameDisplay.className = "bg-lime-300 h-15 w-15 rounded-4xl  hover:bg-lime-200 active:bg-lime-100 text-xl font-semibold "
        display.className = " border-b-2 my-2 border-stone-300 pr-2 h-30 outline-none items-end text-4xl text-end text-ellipsis hidden"
        displayTwo.className = "border-b-2 my-2 border-stone-300 pr-2 pb-3 h-30 justify-end outline-none flex flex-col text-end text-ellipsis  "

    } else {
        hideBtn.className = "bg-lime-300 h-15 w-15 rounded-4xl  hover:bg-lime-200 active:bg-lime-100 text-xl font-semibold "
        gameDisplay.className = "bg-lime-300 h-15 w-15 rounded-4xl  hover:bg-lime-200 active:bg-lime-100 text-xl font-semibold hidden "
        display.className = " border-b-2 my-2 border-stone-300 pr-2 h-30 outline-none items-end text-4xl text-end text-ellipsis "
        displayTwo.className = "border-b-2 my-2 border-stone-300 pr-2 pb-3 h-30 justify-end outline-none flex flex-col text-end text-ellipsis hidden "
    }

}

const currencyConverter = async (e) => {

    let response = await fetch(`https://exchange-rates.abstractapi.com/v1/live/?api_key=bd1f741054964f4394e1552e4b97d11a&base=${currencyOne.value}&target=${currencyTwo.value}`)
    let data = await response.json()
    liveCode = currencyTwo.value
    console.log(data)
    let code = data.exchange_rates[liveCode]
    const results = currencyDisplay.value * code
    currencyDisplayTwo.value += results.toFixed(2)
}


const snakeGame = () => {

    calculatorDisplay.className = " hidden "
    gameScreen.className = "flex flex-col min-h-120 w-90 rounded-2xl bg-lime-100 border-3 py-2 border-stone-300 shadow-2xl "

}

function returnCurrDisplay() {

    calculatorDisplay.className = " flex gap-2 flex-col min-h-120 w-90 rounded-2xl p-1 bg-lime-100 border-3  border-stone-300 shadow-2xl overflow-hidden "
    gameScreen.className = "flex flex-col min-h-120 w-90 rounded-2xl bg-lime-100 border-3 py-2 border-stone-300 shadow-2xl hidden "

    hideBtn.className = "bg-lime-300 h-15 w-15 rounded-4xl  hover:bg-lime-200 active:bg-lime-100 text-xl font-semibold hidden"
    gameDisplay.className = "bg-lime-300 h-15 w-15 rounded-4xl  hover:bg-lime-200 active:bg-lime-100 text-xl font-semibold "

    display.className = " border-b-2 my-2 border-stone-300 pr-2 h-30 outline-none items-end text-4xl text-end text-ellipsis hidden"
    displayTwo.className = "border-b-2 my-2 border-stone-300 pr-2 pb-3 h-30 justify-end outline-none flex flex-col text-end text-ellipsis  "

}

function returnCalcDisplay() {

    calculatorDisplay.className = " flex gap-2 flex-col min-h-120 w-90 rounded-2xl p-1 bg-lime-100 border-3  border-stone-300 shadow-2xl overflow-hidden "
    gameScreen.className = "flex flex-col min-h-120 w-90 rounded-2xl bg-lime-100 border-3 py-2 border-stone-300 shadow-2xl hidden "

    hideBtn.className = "bg-lime-300 h-15 w-15 rounded-4xl  hover:bg-lime-200 active:bg-lime-100 text-xl font-semibold "
    gameDisplay.className = "bg-lime-300 h-15 w-15 rounded-4xl  hover:bg-lime-200 active:bg-lime-100 text-xl font-semibold hidden "

    display.className = " border-b-2 my-2 border-stone-300 pr-2 h-30 outline-none items-end text-4xl text-end text-ellipsis "
    displayTwo.className = "border-b-2 my-2 border-stone-300 pr-2 pb-3 h-30 justify-end outline-none flex flex-col text-end text-ellipsis hidden "

}

