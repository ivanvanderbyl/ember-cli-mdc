import ButtonComponent from "@ivanvanderbyl/ember-material-components-button/components/mdc-button";
import CardAction from "../mixins/card-action";

export default ButtonComponent.extend(CardAction, {
  classNames: ["mdc-card__action--button"]
});
