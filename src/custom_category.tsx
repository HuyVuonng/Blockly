import Blockly from "blockly";

class CustomCategory extends Blockly.ToolboxCategory {
  /**
   * Constructor for a custom category.
   * @override
   */
  constructor(categoryDef, toolbox, opt_parent) {
    super(categoryDef, toolbox, opt_parent);
  }
  /** @override */
  addColourBorder_(colour) {
    const icon = this.iconDom_ as HTMLElement;
    this.rowDiv_!.style.backgroundColor = "white";
    icon.style.backgroundColor = colour;
  }

  /** @override */
  setSelected(isSelected) {
    // We do not store the label span on the category, so use getElementsByClassName.
    const labelDom = this.rowDiv_!.getElementsByClassName(
      "blocklyTreeLabel"
    )[0] as HTMLDivElement;
    const icon = this.iconDom_ as HTMLElement;

    if (isSelected) {
      // Change the background color of the div to white.
      // this.rowDiv_!.style.backgroundColor = this.colour_;
      this.rowDiv_!.style.backgroundColor = "#E9EEF2";
      // Set the colour of the text to the colour of the category.
      // labelDom.style.color = "black";
      // const icon = this.iconDom_ as HTMLElement;
      // icon.style.backgroundColor = "white";
    } else {
      // Set the background back to the original colour.
      this.rowDiv_!.style.backgroundColor = "white";
      // Set the text back to white.
      labelDom.style.color = "black";
      icon.style.backgroundColor = this.colour_;
    }
    // This is used for accessibility purposes.
    Blockly.utils.aria.setState(
      /** @type {!Element} */ this.htmlDiv_ as HTMLElement,
      Blockly.utils.aria.State.SELECTED,
      isSelected
    );
  }

  // cusstom defaul img
  /** @override */
  // createIconDom_() {
  //   const img = document.createElement("img");
  //   img.src =this.iconDom_.

  //   img.alt = "Lamp";
  //   img.width = "15";
  //   img.height = "15";
  //   return img;
  // }
}
Blockly.registry.register(
  Blockly.registry.Type.TOOLBOX_ITEM,
  "customCategorye",
  CustomCategory,
  true
);
