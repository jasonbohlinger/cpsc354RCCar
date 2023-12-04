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

void setup() {
    // Initialize Motor Pins
    pinMode(PIN_Motor_PWMA, OUTPUT);
    pinMode(PIN_Motor_PWMB, OUTPUT);
    pinMode(PIN_Motor_AIN_1, OUTPUT);
    pinMode(PIN_Motor_BIN_1, OUTPUT);
    pinMode(PIN_Motor_STBY, OUTPUT);
}

void loop() {
    // Example usage
    moveForward(200, 2); // Move forward at speed 200 for 2 seconds
    turnLeft(150, 1);    // Turn left at speed 150 for 1 second
    delay(5000);
    // Add more movements as needed
}

void moveForward(uint8_t speed, unsigned long duration) {
    motorControl(direction_just, speed, direction_just, speed, control_enable);
    delay(duration * 1000);
    stopMoving(0);
}

void moveBackward(uint8_t speed, unsigned long duration) {
    motorControl(direction_back, speed, direction_back, speed, control_enable);
    delay(duration * 1000);
    stopMoving(0);
}

void turnRight(uint8_t speed, unsigned long duration) {
    motorControl(direction_back, speed, direction_just, speed, control_enable);
    delay(duration * 1000);
    stopMoving(0);
}

void turnLeft(uint8_t speed, unsigned long duration) {
    motorControl(direction_just, speed, direction_back, speed, control_enable);
    delay(duration * 1000);
    stopMoving(0);
}

void stopMoving(unsigned long duration) {
    motorControl(direction_void, 0, direction_void, 0, control_enable);
    delay(duration * 1000);
}

void motorControl(boolean direction_A, uint8_t speed_A, boolean direction_B, uint8_t speed_B, boolean controlED) {
    if (controlED == control_enable) {
        digitalWrite(PIN_Motor_STBY, HIGH);
        // Control for Motor A
        if (direction_A == direction_just) {
            digitalWrite(PIN_Motor_AIN_1, HIGH);
        } else if (direction_A == direction_back) {
            digitalWrite(PIN_Motor_AIN_1, LOW);
        }
        analogWrite(PIN_Motor_PWMA, speed_A);

        // Control for Motor B
        if (direction_B == direction_just) {
            digitalWrite(PIN_Motor_BIN_1, HIGH);
        } else if (direction_B == direction_back) {
            digitalWrite(PIN_Motor_BIN_1, LOW);
        }
        analogWrite(PIN_Motor_PWMB, speed_B);
    } else {
        digitalWrite(PIN_Motor_STBY, LOW);
    }
}

