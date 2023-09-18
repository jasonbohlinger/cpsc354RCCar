# Move
move [distance] [speed]

The move block will take two inputs, distance and speed, which are two numbers to indicate the movement of the RC Car.
The code that will be executed when this block is called is dependent on the exact hardware we choose for the car, but in general, the code should drive the motor(s) in the correct directions with a set speed in order to move the car. Given the distance and speed, we can calculate the time it will take for the car to complete this movement, and set a loop for that time to continue running the motors.

# Turn
turn [angle] [speed]

The turn block will take two inputs, angle and speed, which is the angle at which the RC Car will turn and the speed of the turn. Perhaps we can overload this function to take in an enum [left, right, forward, backward] and a speed that will automatically input the angle for simplicity.

# Shape [numSides] [side length] [speed]

If we are able to implement accurate turn angles, implementations of regular shapes would directly follow. At the beginning of this block, there would be a calculation for the interior angle of the regular shape. The RC Car would then trace that shape, turning at that angle every segment. 
