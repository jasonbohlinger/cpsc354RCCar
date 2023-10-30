# cpsc354RCCar [MIDTERM]
# Group Members: Jason Bohlinger | Ori Garibi | Liam Propst | Miles Rovenger

The goal of this project will be to drive an RC car remotely using block-based code. The user interface will be Blockly's block-based code, which is a visual editor that compiles the blocks created by the user. The plan is to adapt the code into Arduino C to control the car, but if this proves to be difficult to implement changes may always be made. The motivation behind this project is to create a way to interact with the controls of the car directly without prior knowledge of Arduino C.

This project, by using the Blockly API, directly applies to the topics of parsing, interpretation, and compilation. 
Blocks will be dragged/dropped around a user-friendly GUI to control the RC Car. 
These blocks will then be parsed and interpreted as C code to directly control the car. 
This C code will then be compiled into a file that will be loaded onto the hardware of the car to execute the control sequence designed by the program. 
By using the Blockly API and generating C code as a middle-man step in controlling the RC Car, it allows users to easily control the car without needing the knowledge of a programming language like C.

# Our Blockly Website:
[jasonbohlinger.github.io](https://jasonbohlinger.github.io/cpsc354RCCar/design-blocks/)
