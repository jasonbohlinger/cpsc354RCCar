# Blocks

Each motor is attached to their own individual pin on the Arduino board, and are able to be controlled independently via these output pins. The pins are initialized when the car is powered on.

## Stop [time]

    Iterate over each motor
        delayTime = time / currSpeed
        if (currSpeed > 0)
            while (currSpeed >= 0)
                --currSpeed
                Set each motor's speed to currSpeed
                delay (delayTime)
        else
            while (currSpeed <= 0)
                ++currSpeed
                Set each motor's speed to currSpeed
                delay (delayTime)

## Forward [speed] [time]

    Set each motor's speed in the positive direction
    delay(time - 1)
    stop(1)

## Backward [speed] [time]

    Set each motor's speed in the positive direction
    delay(time - 1)
    stop(1)

## Turn [isClockwise] [time]

    // isClockwise is a boolean argument to specify direction of the turn
    if (isClockwise)
        Set the speed of the left side motors to the positive direction
        Set the speed of the right side motors to the negative direction
    else
        Set the speed of the left side motors to the negative direction
        Set the speed of the right side motors to the positive direction
    delay(time - 1)
    stop(1)
