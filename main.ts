basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        radio.setGroup(1)
        music.playMelody("C5 B A G F E D C ", 120)
    }
})
