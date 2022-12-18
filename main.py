def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    if input.magnetic_force(Dimension.X):
        basic.show_icon(IconNames.ANGRY)
        music.play_melody("- - - - B - - - ", 120)
    else:
        basic.clear_screen()
basic.forever(on_forever)
