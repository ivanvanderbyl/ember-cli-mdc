import Mixin from "@ember/object/mixin";

import Ripple from "@ivanvanderbyl/ember-material-components-ripple/mixins/ripple";
import Themed from "@ivanvanderbyl/ember-material-components-theme/mixins/theme";

import { equal, and } from "@ember/object/computed";

export default Mixin.create(Ripple, Themed, {
  classNames: ["mdc-fab"],

  classNameBindings: [
    "label:mdc-fab--extended",
    "mini:mdc-fab--mini",
    "exited:mdc-fab--exited"
  ],

  attributeBindings: ["label:aria-label", "type"],

  /// Icon for the FAB.
  icon: null,

  /// Optional label for the FAB.
  label: null,

  /// The FAB is an extended.
  labelPosition: "right",

  labelLeft: equal("labelPosition", "left"),
  extendedLeft: and("label", "labelLeft"),

  labelRight: equal("labelPosition", "right"),
  extendedRight: and("label", "labelRight")
});
