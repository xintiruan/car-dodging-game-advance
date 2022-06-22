input.onButtonPressed(Button.A, function () {
    Car.change(LedSpriteProperty.X, -1)
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    Car.change(LedSpriteProperty.X, 1)
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
})
let Car: game.LedSprite = null
music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
basic.showString("3 2 1")
basic.showString("LVL 1")
let Obs_1 = game.createSprite(randint(0, 4), 0)
let Obs_2 = game.createSprite(randint(0, 4), 0)
let Obs_3 = game.createSprite(randint(0, 4), 0)
let Obs_4 = game.createSprite(randint(0, 4), 0)
Car = game.createSprite(2, 4)
let speed = 600
while (true) {
    for (let index = 0; index < 4; index++) {
        Obs_1.change(LedSpriteProperty.Y, 1)
        Obs_2.change(LedSpriteProperty.Y, 1)
        Obs_3.change(LedSpriteProperty.Y, 1)
        Obs_4.change(LedSpriteProperty.Y, 1)
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        basic.pause(speed)
    }
    if (Obs_1.isTouching(Car) || Obs_2.isTouching(Car) || (Obs_3.isTouching(Car) || Obs_4.isTouching(Car))) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
        game.gameOver()
    } else if (game.score() == 80) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        Obs_1.delete()
        Obs_2.delete()
        Obs_3.delete()
        Obs_4.delete()
        Car.delete()
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Heart)
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.pause(1000)
            basic.showIcon(IconNames.Heart)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(1000)
        }
        pins.digitalWritePin(DigitalPin.P2, 0)
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        basic.showString("You Win")
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Heart)
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.pause(1000)
            basic.showIcon(IconNames.Heart)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(1000)
        }
        pins.digitalWritePin(DigitalPin.P2, 0)
        game.gameOver()
    } else if (game.score() == 20) {
        music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
        basic.showNumber(game.score())
        pins.digitalWritePin(DigitalPin.P1, 1)
        for (let index = 0; index < 3; index++) {
            basic.showString("LVL 2")
            basic.pause(100)
        }
        game.addScore(1)
        speed += -5
        Obs_1.set(LedSpriteProperty.X, randint(0, 4))
        Obs_2.set(LedSpriteProperty.X, randint(0, 4))
        Obs_3.set(LedSpriteProperty.X, randint(0, 4))
        Obs_4.set(LedSpriteProperty.X, randint(0, 4))
        Obs_1.set(LedSpriteProperty.Y, 0)
        Obs_2.set(LedSpriteProperty.Y, 0)
        Obs_3.set(LedSpriteProperty.Y, 0)
        Obs_4.set(LedSpriteProperty.Y, 0)
    } else if (game.score() == 40) {
        music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
        basic.showNumber(game.score())
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        for (let index = 0; index < 3; index++) {
            basic.showString("LVL 3")
            basic.pause(100)
        }
        game.addScore(1)
        speed += -5
        Obs_1.set(LedSpriteProperty.X, randint(0, 4))
        Obs_2.set(LedSpriteProperty.X, randint(0, 4))
        Obs_3.set(LedSpriteProperty.X, randint(0, 4))
        Obs_4.set(LedSpriteProperty.X, randint(0, 4))
        Obs_1.set(LedSpriteProperty.Y, 0)
        Obs_2.set(LedSpriteProperty.Y, 0)
        Obs_3.set(LedSpriteProperty.Y, 0)
        Obs_4.set(LedSpriteProperty.Y, 0)
    } else if (game.score() == 60) {
        music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
        basic.showNumber(game.score())
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
        for (let index = 0; index < 3; index++) {
            basic.showString("LVL 4")
            basic.pause(100)
        }
        game.addScore(1)
        speed += -5
        Obs_1.set(LedSpriteProperty.X, randint(0, 4))
        Obs_2.set(LedSpriteProperty.X, randint(0, 4))
        Obs_3.set(LedSpriteProperty.X, randint(0, 4))
        Obs_4.set(LedSpriteProperty.X, randint(0, 4))
        Obs_1.set(LedSpriteProperty.Y, 0)
        Obs_2.set(LedSpriteProperty.Y, 0)
        Obs_3.set(LedSpriteProperty.Y, 0)
        Obs_4.set(LedSpriteProperty.Y, 0)
    } else {
        game.addScore(1)
        speed += -5
        Obs_1.set(LedSpriteProperty.X, randint(0, 4))
        Obs_2.set(LedSpriteProperty.X, randint(0, 4))
        Obs_3.set(LedSpriteProperty.X, randint(0, 4))
        Obs_4.set(LedSpriteProperty.X, randint(0, 4))
        Obs_1.set(LedSpriteProperty.Y, 0)
        Obs_2.set(LedSpriteProperty.Y, 0)
        Obs_3.set(LedSpriteProperty.Y, 0)
        Obs_4.set(LedSpriteProperty.Y, 0)
    }
}
