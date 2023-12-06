#ifndef MOTOR_CONTROL_H
#define MOTOR_CONTROL_H

#include <Arduino.h>

// Pin Definitions
#define PIN_Motor_PWMA 5
#define PIN_Motor_PWMB 6
#define PIN_Motor_BIN_1 8
#define PIN_Motor_AIN_1 7
#define PIN_Motor_STBY 3

// Motor Directions
#define direction_just true
#define direction_back false
#define direction_void 3

// Enable/Disable Control
#define control_enable true
#define control_disable false

// Function Prototypes
void moveForward(uint8_t speed, unsigned long duration);
void moveBackward(uint8_t speed, unsigned long duration);
void turnRight(uint8_t speed, unsigned long duration);
void turnLeft(uint8_t speed, unsigned long duration);
void stopMoving(unsigned long duration);
void motorControl(boolean direction_A, uint8_t speed_A, boolean direction_B, uint8_t speed_B, boolean controlED);
void setupMotors();

#endif

