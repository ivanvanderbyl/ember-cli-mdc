import Component from "@ember/component";
import layout from "../templates/components/mdc-foo";

import { Rtl } from "@ivanvanderbyl/ember-material-components-rtl";

export default Component.extend(Rtl, {
  layout,

  classNames: ["mdc-foo"]
});
