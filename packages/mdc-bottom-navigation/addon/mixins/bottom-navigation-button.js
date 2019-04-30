import Mixin from "@ember/object/mixin";
import RippleMixin from "@ivanvanderbyl/ember-material-components-ripple/mixins/ripple";

export default Mixin.create(RippleMixin, {
  classNames: ["mdc-bottom-navigation__button"],

  classNameBindings: [
    "label:mdc-bottom-navigation__button--with-label",
    "horizontal:mdc-bottom-navigation__button--horizontal"
  ],

  icon: null,

  label: null,

  horizontal: false,

  createRippleComponent: true,

  didRender() {
    this._super(...arguments);

    this._ripple.unbounded = true;
  }
});
