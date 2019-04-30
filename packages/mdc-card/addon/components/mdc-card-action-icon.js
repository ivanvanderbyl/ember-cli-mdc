import CardAction from "../mixins/card-action";
import IconButtonComponent from "@ivanvanderbyl/ember-material-components-icon-button/components/mdc-icon-button";

export default IconButtonComponent.extend(CardAction, {
  classNames: ["mdc-card__action--icon"],

  attributeBindings: ["title"],

  title: null
});
