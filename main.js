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
    currencyDisplayTwo.value = ""
}

function Calculate() {
    try {
        let calc = eval(display.value)
        display.value = calc
        currencyConverter()
    } catch (error) {
        display.value = "Error"
    }

    currencyConverter()

}

function clearDisplay() {
    display.value = ''
    currencyDisplay.value = ''
    currencyDisplayTwo.value = ''

}

function popValue() {

    poping = display.value.split('')
    poping.pop()
    popped = poping.join('')
    display.value = popped

    currencyDisplayTwo.value = ''

    currpoping = currencyDisplay.value.split('')
    currpoping.pop()
    currpopped = currpoping.join('')
    currencyDisplay.value = currpopped
}

function selectCountry() {

    currencyDisplay.value = ''
    currencyDisplayTwo.value = ''
    currencyCode.innerText = currencyOne.value
    currencyCodeTwo.innerText = currencyTwo.value

}

function changeDisplay() {

    display.value = ''
    currencyDisplay.value = ''
    currencyDisplayTwo.value = ''

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
    currencyDisplayTwo.value = results.toFixed(2)
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



const gameboard = document.querySelector('#gameboard')
const scoreText = document.querySelector('#score')
const resetBtn = document.querySelector('#resetBtn')
const ctx = gameboard.getContext("2d")
const gameWidth = gameboard.width;
const gameHeight = gameboard.height;
const boardBackground = "#ECFCCA"
const snakeColor = "green"
const snakeBorder = "black"
const foodColor = "red"
const unitSize = 20;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let snake = [

    { x: unitSize * 4, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: unitSize * 1, y: 0 },
    { x: 0, y: 0 },
];


window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);


function gameStart() {

    snake = [

        { x: unitSize * 4, y: 0 },
        { x: unitSize * 3, y: 0 },
        { x: unitSize * 2, y: 0 },
        { x: unitSize * 1, y: 0 },
        { x: 0, y: 0 },
    ];
    running = true;
    score = 0
    scoreText.textContent = score;
    createFood();
    drawFood();
    nextTick();
}
function nextTick() {

    if (running) {
        setTimeout(() => {

            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();

        }, 80);
    } else {
        displayGameOver()
    }
}
function clearBoard() {
    ctx.fillStyle = boardBackground
    ctx.fillRect(0, 0, gameWidth, gameHeight)
}
function createFood() {

    function randomFood(min, max) {
        const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize
        return randNum;
    }

    foodX = randomFood(0, gameWidth - unitSize)
    foodY = randomFood(0, gameHeight - unitSize)
}
function drawFood() {
    ctx.fillStyle = foodColor
    ctx.fillRect(foodX, foodY, unitSize, unitSize);
}
function moveSnake() {

    const head = {
        x: snake[0].x + xVelocity,
        y: snake[0].y + yVelocity
    };

    snake.unshift(head)
    // if food is eaten
    if (snake[0].x == foodX && snake[0].y == foodY) {

        score += 1;
        scoreText.textContent = score
        createFood();


    } else {
        snake.pop()
    }

}
function drawSnake() {

    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = snakeBorder;
    snake.forEach(snakePart => {

        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize)
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize)

    })
}
function changeDirection(event) {
    const keyPressed = event.keyCode

    const LEFT = 37
    const RIGHT = 39
    const UP = 38
    const DOWN = 40

    const goingUP = (yVelocity == -unitSize)
    const goingDOWN = (yVelocity == unitSize)
    const goingRIGHT = (xVelocity == unitSize)
    const goingLEFT = (xVelocity == -unitSize)

    switch (true) {
        case (keyPressed == LEFT && !goingRIGHT):
            xVelocity = -unitSize;
            yVelocity = 0
            break;
        case (keyPressed == RIGHT && !goingLEFT):
            xVelocity = unitSize;
            yVelocity = 0
            break;
        case (keyPressed == UP && !goingDOWN):
            yVelocity = -unitSize;
            xVelocity = 0
            break;
        case (keyPressed == DOWN && !goingUP):
            yVelocity = unitSize;
            xVelocity = 0
            break;
    }
}
function checkGameOver() {

    switch (true) {

        case (snake[0].x < 0):
            running = false;
            break;
        case (snake[0].x >= gameWidth):
            running = false;
            break;
        case (snake[0].y < 0):
            running = false;
            break;
        case (snake[0].y >= gameHeight):
            running = false;
            break;
    }

    for (let i = 1; i < snake.length; i += 1) {
        if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
            running = false;
        }
    }
}
function displayGameOver() {

    ctx.font = " 50px MV Boli"
    ctx.fillStyle = "black"
    ctx.textAlign = "center"
    ctx.fillText("GAME OVER 👾", gameWidth / 2, gameHeight / 2);
    running = false;
}
function resetGame() {

    score = 0
    scoreText.textContent = score
    xVelocity = unitSize;
    yVelocity = 0;
    snake = [
        { x: unitSize * 4, y: 0 },
        { x: unitSize * 3, y: 0 },
        { x: unitSize * 2, y: 0 },
        { x: unitSize * 1, y: 0 },
        { x: 0, y: 0 },
    ];

}

function startAgain() {

    resetGame();
    gameStart();
}

function restartGame() {

    resetGame()
    scoreText.textContent = 0
    clearBoard()
    ctx.font = " 50px MV Boli"
    ctx.fillStyle = "black"
    ctx.textAlign = "center"
    ctx.fillText("Start again✨", gameWidth / 2, gameHeight / 2);
    drawSnake()

}


function goUP() {
    yVelocity = -unitSize;
    xVelocity = 0;
}
function goDown() {
    yVelocity = unitSize;
    xVelocity = 0;
}
function goLeft() {
    xVelocity = -unitSize;
    yVelocity = 0;
}
function goRight() {
    xVelocity = unitSize;
    yVelocity = 0;
}