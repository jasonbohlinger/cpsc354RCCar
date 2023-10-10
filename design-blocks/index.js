'use strict';

let workspace = null;

Blockly.Blocks['run'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Loop")
        .appendField(new Blockly.FieldNumber(10, 1), "ITERATIONS")
        .appendField("times");
    this.appendStatementInput("COMMAND")
        .setCheck(["MOVE", "TURN"])
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("Runs a command.");
  }
};
Blockly.Blocks['move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move car forward by")
        .appendField(new Blockly.FieldNumber(10, 1), "DISTANCE") // Default value of 10, minimum value of 1.
        .appendField("units");
    this.setPreviousStatement(true, ["MOVE", "TURN"]);
    this.setNextStatement(true, ["MOVE", "TURN"]);
    this.setColour(120);
    this.setTooltip("Moves the car forward by a specified distance.");
  }
};


Blockly.Blocks['turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn car")
        .appendField(new Blockly.FieldDropdown([["left","LEFT"], ["right","RIGHT"]]), "DIRECTION");
    this.setPreviousStatement(true, ["MOVE", "TURN"]);
    this.setNextStatement(true, ["MOVE", "TURN"]);
    this.setColour(290);
    this.setTooltip("Turns the car left or right.");
  }
};

Blockly.JavaScript.forBlock['run'] = function(block) {
  var iterations = block.getFieldValue('ITERATIONS');
  var body = Blockly.JavaScript.statementToCode(block, 'COMMAND');

  var code = '' 
  code += 'for i in range(' + iterations + '):\n';
  code += body.split('\n').map(function(line) {
    return '    ' + line;
  }).join('\n') + '\n';

  
  return code
}
Blockly.JavaScript.forBlock['move'] = function(block) {
  var distance = block.getFieldValue('DISTANCE');
  var code = 't.forward(' + distance * 5 + ')\n';
  return code;
}

Blockly.JavaScript.forBlock['turn'] = function(block) {
  var direction = block.getFieldValue('DIRECTION');
  var code;
  if (direction == 'LEFT') {
    code = 't.left(90)\n';
  } else {
    code = 't.right(90)\n';
  }
  return code;
}

function start() {
  // Create main workspace.
  workspace = Blockly.inject('blocklyDiv',
      {
        toolbox: document.getElementById('toolbox-categories'),
      });
}
