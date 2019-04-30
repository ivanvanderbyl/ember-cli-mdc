import ButtonComponent from "@ivanvanderbyl/ember-material-components-button/components/mdc-button";

export default ButtonComponent.extend({
  classNames: ["mdc-dialog__button"],

  classNameBindings: ["default:mdc-dialog__button--default"],

  attributeBindings: ["action:data-mdc-dialog-action"],

  default: false
});
