# cpsc354RCCar

## Group Members: Jason Bohlinger | Ori Garibi | Liam Propst | Miles Rovenger

The goal of this project will be to drive an RC car remotely using block-based code. The user interface will be Blockly's block-based code, which is a visual editor that compiles the blocks created by the user. The plan is to adapt the code into Arduino C to control the car, but if this proves to be difficult to implement changes may always be made. The motivation behind this project is to create a way to interact with the controls of the car directly without prior knowledge of Arduino C.

This project, by using the Blockly API, directly applies to the topics of parsing, interpretation, and compilation.
Blocks will be dragged/dropped around a user-friendly GUI to control the RC Car.
These blocks will then be parsed and interpreted as C code to directly control the car.
This C code will then be compiled into a file that will be loaded onto the hardware of the car to execute the control sequence designed by the program.
By using the Blockly API and generating C code as a middle-man step in controlling the RC Car, it allows users to easily control the car without needing the knowledge of a programming language like C.

## Our Blockly Website

[https://jasonbohlinger.github.io/cpsc354RCCar/src/design-blocks/](https://jasonbohlinger.github.io/cpsc354RCCar/src/design-blocks/)

## Running / Testing

1. Open index.html in a browser
2. Move blocks to fit your program specifications
3. Select 'Generate Python'
4. Select 'Generate Python Script'
5. Select 'Save to code' to start downloading turtleScript.py, the python executable script

## Running Python Script (from terminal)

    pip install tk
This will install the tkinter module which turtle runs on top of.

    python turtleScript.py
This will open a new window with your turtle. It will move and draw lines on top of where it moves, and the window will stay open until you close it.

## Arduino Car

The car is controlled by the arduino and four motors. [motor_control.ino](https://github.com/jasonbohlinger/cpsc354RCCar/blob/main/motor_control.ino) details the functions used to control these mototrs. Code generated using these functions will be programmed onto the Arduino hardware via serial communication.
