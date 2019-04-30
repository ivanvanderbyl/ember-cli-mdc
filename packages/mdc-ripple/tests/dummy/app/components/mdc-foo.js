import Component from "@ember/component";
import layout from "../templates/components/mdc-foo";

import { Ripple } from "@ivanvanderbyl/ember-material-components-ripple";

export default Component.extend(Ripple, {
  layout,

  createRippleComponent: true
});
