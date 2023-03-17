let turn = false
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 7 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        turn = Math.randomBoolean()
        if (turn == true) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            basic.pause(300)
        } else if (turn == false) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
            basic.pause(300)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 130)
    }
})
basic.forever(function () {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    music.playTone(262, music.beat(BeatFraction.Eighth))
    basic.pause(500)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    music.playTone(330, music.beat(BeatFraction.Eighth))
})
