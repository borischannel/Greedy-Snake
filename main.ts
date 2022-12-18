input.onButtonPressed(Button.B, function () {
    greedy_snake.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.AB, function () {
    game.gameOver()
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    greedy_snake.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.A, function () {
    greedy_snake.change(LedSpriteProperty.X, -1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    greedy_snake.change(LedSpriteProperty.Y, -1)
})
let greedy_snake: game.LedSprite = null
basic.showString("Greedy Snake")
basic.clearScreen()
basic.pause(3000)
basic.showLeds(`
    . . . . .
    # # # # #
    . . . . .
    # # # # #
    . . . . .
    `)
basic.pause(randint(1000, 3000))
basic.showLeds(`
    . . . . .
    # # # # #
    # . . . .
    # # # # #
    . . . . .
    `)
basic.pause(randint(1000, 4000))
basic.showLeds(`
    . . . . .
    # # # # #
    # # . . .
    # # # # #
    . . . . .
    `)
basic.pause(randint(1000, 5000))
basic.showLeds(`
    . . . . .
    # # # # #
    # # # . .
    # # # # #
    . . . . .
    `)
basic.pause(randint(1000, 6000))
basic.showLeds(`
    . . . . .
    # # # # #
    # # # # .
    # # # # #
    . . . . .
    `)
basic.pause(randint(1000, 7000))
basic.showLeds(`
    . . . . .
    # # # # #
    # # # # #
    # # # # #
    . . . . .
    `)
basic.pause(1000)
basic.clearScreen()
basic.pause(randint(1000, 8000))
greedy_snake = game.createSprite(randint(0, 4), 4)
let food = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    while (greedy_snake.isTouching(food)) {
        game.addScore(1)
        food.delete()
        food = game.createSprite(randint(0, 4), randint(0, 4))
    }
})
