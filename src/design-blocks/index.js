'use strict';

let workspace = null;
Blockly.Blocks['run'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Loop")
        .appendField(new Blockly.FieldNumber(10, 1), "ITERATIONS")
        .appendField("times");
    this.appendStatementInput("COMMAND")
        .setCheck(["move", "turn"])
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("Runs a command.");
  }
};
Blockly.Blocks['move_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move forward for ")
        .appendField(new Blockly.FieldNumber(10, 1), "TIME") // Default value of 10, minimum value of 1.
        .appendField("seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Moves the car forward by a specified distance.");
  }
};

Blockly.Blocks['move_backward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move backward for ")
        .appendField(new Blockly.FieldNumber(10, 1), "TIME") // Default value of 10, minimum value of 1.
        .appendField("seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Moves the car backward by a specified distance.");
  }
};

Blockly.Blocks['speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set speed (1 - 255): ")
        .appendField(new Blockly.FieldNumber(100, 1, 255), "SPEED") // Default value of 5, minimum value of 1, maximum of 10
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip("Sets the speed of the car.");
  }
};


Blockly.Blocks['turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn car")
        .appendField(new Blockly.FieldDropdown([["left","LEFT"], ["right","RIGHT"]]), "DIRECTION")
        .appendField(new Blockly.FieldNumber(), "DURATION")
        .appendField("seconds");
    this.setPreviousStatement(true, ["move", "turn"]);
    this.setNextStatement(true, ["move", "turn"]);
    this.setColour(290);
    this.setTooltip("Turns the car left or right.");
  }
};

Blockly.Blocks['pause'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pause for")
        .appendField(new Blockly.FieldNumber(1, 0), "DURATION")
        .appendField("seconds");
    this.setPreviousStatement(true, null); // Adjust depending on allowable previous statements
    this.setNextStatement(true, null); // Adjust depending on allowable next statements
    this.setColour(160);
    this.setTooltip("Pauses the car for a certain amount of time.");
  }
};


Blockly.JavaScript.forBlock['run'] = function(block) {
  var iterations = block.getFieldValue('ITERATIONS');
  var body = Blockly.JavaScript.statementToCode(block, 'COMMAND');

  var code = '' 
  code += `for (int i = 0; i < ${iterations}; ++i) {\n`;
  code += body.split('\n').map(function(line) {
    return '    ' + line;
  }).join('\n') + '\n}\n';
  
  return code
}
Blockly.JavaScript.forBlock['move_forward'] = function(block) {
  var time = block.getFieldValue('TIME');
  var code = `moveForward(CAR_SPEED, ${time});\n`;
  return code;
}

Blockly.JavaScript.forBlock['move_backward'] = function(block) {
  var time = block.getFieldValue('TIME');
  var code = `moveBackward(CAR_SPEED, ${time});\n`;
  return code;
}

Blockly.JavaScript.forBlock['speed'] = function(block) {
  var speed = block.getFieldValue('SPEED');
  var code = `CAR_SPEED = ${speed};\n`;
  return code;
}

Blockly.JavaScript.forBlock['turn'] = function(block) {
  var direction = block.getFieldValue('DIRECTION');
  var duration = block.getFieldValue('DURATION')
  var code;
  if (direction == 'LEFT') {
    code = `turnLeft(CAR_SPEED, ${duration});\n`;
  } else {
    code = `turnRight(CAR_SPEED, ${duration});\n`;
  }
  return code;
}

Blockly.JavaScript.forBlock['pause'] = function(block) {
  var duration = block.getFieldValue('DURATION');
  var code = `stopMoving(${duration});\n`;
  return code;
};


function start() {
  // Create main workspace.
  workspace = Blockly.inject('blocklyDiv',
      {
        toolbox: document.getElementById('toolbox-categories'),
      });
}
