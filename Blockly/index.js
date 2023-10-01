'use strict';

let workspace = null;

Blockly.Blocks['run'] = {
  init: function() {
    this.appendStatementInput("COMMAND")
        .setCheck(["MOVE", "TURN"])
        .appendField("run");
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

// move code generation
// Blockly.JavaScript['move'] = function(block) {   
//   var distance = block.getFieldValue('DISTANCE');   
//   var code = 'moveCarForward(' + distance + ');\n';   
//   return code; 
// };


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

function start() {
  // Create main workspace.
  workspace = Blockly.inject('blocklyDiv',
      {
        toolbox: document.getElementById('toolbox-categories'),
      });
}
