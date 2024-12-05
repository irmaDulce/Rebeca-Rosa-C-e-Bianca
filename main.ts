input.onButtonPressed(Button.A, function () {
    radio.setGroup(1)
    radio.sendNumber(1)
    music.play(music.createSoundExpression(WaveShape.Triangle, 5000, 5000, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.createSoundExpression(WaveShape.Noise, 5000, 657, 255, 255, 500, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(1)
    radio.sendNumber(1)
    music.play(music.tonePlayable(831, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
})
basic.showIcon(IconNames.Yes)
