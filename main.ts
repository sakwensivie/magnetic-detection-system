input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.magneticForce(Dimension.X))
    basic.pause(1000)
})
basic.forever(function () {
    if (input.magneticForce(Dimension.X)) {
        basic.showIcon(IconNames.Angry)
        music.playMelody("- - - - B - - - ", 120)
    } else {
        basic.clearScreen()
    }
})
