import JavaScript from "blockly/javascript";

JavaScript.javascriptGenerator.forBlock["change_background_color"] = function (
  block
) {
  const colour_bgcolorselect = block.getFieldValue("bgColorSelect");
  const checkbox_cbchange = block.getFieldValue("cbChange") === "TRUE";
  let code;
  if (checkbox_cbchange) {
    code = `document.querySelector("body").style.backgroundColor ="${colour_bgcolorselect}"\n`;
  } else {
    code = `document.querySelector("body").style.backgroundColor ="transparent"\n`;
  }

  return code;
};

JavaScript.javascriptGenerator.forBlock["if_then"] = function (
  block,
  generator
) {
  // const field_iftext = block.getFieldValue("ifText");
  const value_if = generator.valueToCode(block, "if", JavaScript.Order.ATOMIC);
  // const field_thentext = block.getFieldValue("thenText");
  const value_then = generator.valueToCode(
    block,
    "then",
    JavaScript.Order.ATOMIC
  );
  // TODO: Assemble javascript into code variable.
  const code = `if(${value_if})then(${value_then})\n`;
  return code;
};

JavaScript.javascriptGenerator.forBlock["ifblock"] = function (
  block,
  generator
) {
  const value_if = generator.valueToCode(block, "if", JavaScript.Order.ATOMIC);
  const statements_do = generator.statementToCode(block, "do");

  const code = `if(${value_if}){
      ${statements_do}
  }\n`;
  return code;
};

JavaScript.javascriptGenerator.forBlock["textinput"] = function (block) {
  const text_name = block.getFieldValue("NAME");
  // TODO: Assemble javascript into code variable.
  const code = `'${text_name}'\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, JavaScript.Order.ATOMIC];
};

JavaScript.javascriptGenerator.forBlock["console_log"] = function (
  block,
  generator
) {
  const value_inputconsole = generator.valueToCode(
    block,
    "inputConsole",
    JavaScript.Order.ATOMIC
  );
  // TODO: Assemble javascript into code variable.
  const code = `console.log(${value_inputconsole})\n`;
  return code;
};

JavaScript.javascriptGenerator.forBlock["alert"] = function (block, generator) {
  const value_inputalert = generator.valueToCode(
    block,
    "inputAlert",
    JavaScript.Order.ATOMIC
  );
  // TODO: Assemble javascript into code variable.
  const code = `alert(${value_inputalert})\n`;
  return code;
};

JavaScript.javascriptGenerator.forBlock["start"] = function (block, generator) {
  const statements_startblock = generator.statementToCode(block, "StartBlock");
  const StartCode = JSON.stringify({ Start: statements_startblock });
  // TODO: Assemble javascript into code variable.
  return StartCode;
};
