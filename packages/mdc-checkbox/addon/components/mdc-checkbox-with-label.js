import FormFieldComponent from "@ivanvanderbyl/ember-material-components-form-field/components/mdc-form-field";
import layout from "../templates/components/mdc-checkbox-with-label";

export default FormFieldComponent.extend({
  layout,

  classNames: ["mdc-checkbox-with-label"],

  didInsertElement() {
    this._super(...arguments);

    // Associate the label with the input control.
    const input = this.element.querySelector("input");
    const label = this.element.querySelector("label");
    label.setAttribute("for", input.id);

    // Associate the checkbox input with the form field.
    this._formField.input = this.get("input");
  }
});
