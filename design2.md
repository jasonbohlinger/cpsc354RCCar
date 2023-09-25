# Blocks

Each motor is attached to their own individual pin on the Arduino board, and are able to be controlled independently via these output pins. The pins are initialized when the car is powered on.

## Stop [time]

    while (timer < time)
        Iterate over each motor
            if (currSpeed > 0)
                --currSpeed
                Set the motor's speed to currSpeed
            else
                ++currSpeed
                Set the motor's speed to currSpeed

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

# Use Case

    loop:
        move forward [10 speed] [15 time]
        turn [true isClockwise] [5 time]
        move backward [3 speed] [10 time]

# Simulator Software

It is possible to build a simulator for our Car by plotting a point on an x,y cartesian plane and moving it around according to the movements specified by the block code. This can be built using the "turtle" library, specified [here](https://w3.cs.jmu.edu/lam2mo/cs240_2015_08/turtle.html) by James Madison Universiy, 2015. The turtle could be used to mimic the car and move at certain rates in certain directions.