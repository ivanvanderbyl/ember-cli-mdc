import IconComponent from "@ivanvanderbyl/ember-material-components-icon/components/mdc-icon";

export default IconComponent.extend({
  classNames: ["mdc-button__icon"],

  didInsertElement() {
    this._super(...arguments);

    this.element.setAttribute("aria-hidden", true);
  }
});
