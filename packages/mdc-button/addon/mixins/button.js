import Mixin from "@ember/object/mixin";
import Ripple from "@ivanvanderbyl/ember-material-components-ripple/mixins/ripple";
import Theme from "@ivanvanderbyl/ember-material-components-theme/mixins/theme";

import { computed } from "@ember/object";
import { isPresent } from "@ember/utils";

export default Mixin.create(Theme, Ripple, {
  classNames: ["mdc-button"],

  classNameBindings: ["mdcStyleClassName", "dense:mdc-button--dense"],

  attributeBindings: ["disabled", "value", "type", "form"],

  dense: false,

  mdcStyleClassName: computed("style", function() {
    const style = this.get("style");
    return isPresent(style) ? `mdc-button--${style}` : null;
  })
});
