import IconComponent from "@ivanvanderbyl/ember-material-components-icon/components/mdc-icon";

export default IconComponent.extend({
  classNames: ["mdc-icon-button__icon"],

  classNameBindings: ["on:mdc-icon-button__icon--on"],

  on: false
});
