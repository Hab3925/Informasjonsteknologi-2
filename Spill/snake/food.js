import {
    onSnake,
    expandSnake
} from './snake.js'

import {
    randomGridPos
} from './grid.js'

let food = getRandomFoodPos()

const expantionRate = 1

export function update() {
    if (onSnake(food)) {
        expandSnake(expantionRate)
        food = getRandomFoodPos()
    }
}

export function draw(gameboard) {
    const snakeElement = document.createElement("div")
    snakeElement.style.gridRowStart = food.y
    snakeElement.style.gridColumnStart = food.x
    snakeElement.classList.add('food')
    gameboard.appendChild(snakeElement)
}

function getRandomFoodPos() {
    let newFoodPos
    while (newFoodPos == null || onSnake(newFoodPos)) {
        newFoodPos = randomGridPos()
    }
    return newFoodPos
}