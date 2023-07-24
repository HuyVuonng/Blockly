import Blockly, { Block } from "blockly";

Blockly.Blocks["change_background_color"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Change background color")
      .appendField(new Blockly.FieldColour("#ff0000"), "bgColorSelect")
      .appendField("Change")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "cbChange");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["if_then"] = {
  init: function () {
    const block = this as Block;

    block
      .appendValueInput("if")
      .setCheck(null)
      .appendField(new Blockly.FieldLabelSerializable("if"), "ifText");
    block
      .appendValueInput("then")
      .setCheck(null)
      .appendField(new Blockly.FieldLabelSerializable("then"), "thenText");
    block.setColour(230);
    block.setTooltip("");
    block.setHelpUrl("");
  },
};

Blockly.Blocks["ifblock"] = {
  init: function () {
    this.appendValueInput("if").setCheck(null).appendField("if");
    this.appendStatementInput("do").setCheck(null).appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["textinput"] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('"')
      .appendField(new Blockly.FieldTextInput(""), "NAME")
      .appendField('"');
    this.setOutput(true, "String");
    this.setColour(15);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["console_log"] = {
  init: function () {
    this.appendValueInput("inputConsole")
      .setCheck("String")
      .appendField('Console.log("');
    this.appendDummyInput().appendField('")');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["alert"] = {
  init: function () {
    this.appendValueInput("inputAlert")
      .setCheck("String")
      .appendField("Alert(");
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["start"] = {
  init: function () {
    this.appendDummyInput().appendField("Start");
    this.appendStatementInput("StartBlock").setCheck(null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
