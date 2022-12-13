basic.forever(function () {
    if (input.temperature() < 3) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        music.playTone(880, music.beat(BeatFraction.Half))
        basic.clearScreen()
        basic.pause(200)
    }
})
