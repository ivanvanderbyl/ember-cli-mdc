import Mixin from "@ember/object/mixin";
import ButtonMixin from "@ivanvanderbyl/ember-material-components-button/mixins/button";

export default Mixin.create(ButtonMixin, {
  classNames: ["mdc-step__button"]
});
