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
let button = document.querySelectorAll('button')


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
        display.className = " border-b-2 my-2 border-stone-300 pr-2 h-30 outline-none items-end text-4xl text-end text-ellipsis hidden"
        displayTwo.className = "border-b-2 my-2 border-stone-300 pr-2 pb-3 h-30 justify-end outline-none flex flex-col text-end text-ellipsis  "

    } else {
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

