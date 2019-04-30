import ButtonLinkComponent from "@ivanvanderbyl/ember-material-components-button/components/mdc-button-linkto";
import CardAction from "../mixins/card-action";

export default ButtonLinkComponent.extend(CardAction, {
  classNames: ["mdc-card__action--button"]
});
