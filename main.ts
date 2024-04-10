basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.M1)
    basic.pause(1000)
})
