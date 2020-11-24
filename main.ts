for (let x = 0; x <= 4; x++) {
    led.plot(x, 2)
    led.plot(2, x)
    basic.pause(200)
}
