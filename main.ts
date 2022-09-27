radio.onReceivedNumber(function (receivedNumber) {
    last_strength = current_strength
    current_strength = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    basic.showNumber(current_strength)
    if (current_strength - 4 >= last_strength) {
        basic.showIcon(IconNames.Happy)
    }
    if (current_strength + 4 <= last_strength) {
        basic.showIcon(IconNames.Angry)
    }
})
let current_strength = 0
let last_strength = 0
radio.setGroup(11)
