input.onButtonPressed(Button.A, function () {
    x += 1
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(x * 10 + y)
    radio.sendString("JuanMa")
    basic.clearScreen()
    radio.setGroup(1)
    y = 0
    x = 0
})
radio.onReceivedString(function (receivedString) {
    led.plot(parseFloat(receivedString.substr(0, 1)), parseFloat(receivedString.substr(1, 1)))
})
input.onButtonPressed(Button.B, function () {
    y += 1
})
let x = 0
let y = 0
radio.setGroup(1)
y = 0
x = 0
basic.forever(function () {
	
})
