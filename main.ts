input.onButtonPressed(Button.B, function () {
    greedy_snake.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.AB, function () {
    greedy_snake.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.A, function () {
    greedy_snake.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(score)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    led.setBrightness(0)
    basic.pause(3000)
    music.playTone(988, music.beat(BeatFraction.Quarter))
    music.playTone(880, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.playTone(698, music.beat(BeatFraction.Quarter))
    music.playTone(659, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    basic.pause(2000)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 1, 5000, 255, 255, 600, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    greedy_snake.change(LedSpriteProperty.Y, -1)
})
let greedy_snake: game.LedSprite = null
let score = 0
basic.showLeds(`
    # # # # .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.pause(2000)
basic.showLeds(`
    # # # # .
    # . . . .
    # . . . .
    # . . . .
    . . . . .
    `)
basic.pause(2000)
basic.showLeds(`
    # # # # .
    # . . . .
    # . . . .
    # . . . .
    # # # # .
    `)
basic.pause(2000)
basic.showLeds(`
    # # # # .
    # . . . .
    # . # # #
    # . . . .
    # # # # .
    `)
basic.pause(2000)
basic.showLeds(`
    # # # # .
    # . . . #
    # . # # #
    # . . . #
    # # # # .
    `)
basic.pause(2000)
basic.showLeds(`
    # # # # .
    # . . . #
    # . # # #
    # . . . #
    # # # # .
    `)
basic.pause(2000)
music.playTone(131, music.beat(BeatFraction.Quarter))
music.playTone(147, music.beat(BeatFraction.Quarter))
music.playTone(165, music.beat(BeatFraction.Quarter))
music.playTone(175, music.beat(BeatFraction.Quarter))
music.playTone(196, music.beat(BeatFraction.Quarter))
basic.pause(500)
music.playTone(262, music.beat(BeatFraction.Double))
basic.pause(5000)
basic.clearScreen()
basic.pause(1000)
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
score = game.score()
greedy_snake = game.createSprite(randint(0, 4), 4)
let food = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    while (greedy_snake.isTouching(food)) {
        game.addScore(1)
        music.playTone(784, music.beat(BeatFraction.Quarter))
        food.delete()
        food = game.createSprite(randint(0, 4), randint(0, 4))
    }
})
