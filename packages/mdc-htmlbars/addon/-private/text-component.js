import Component from "@ember/component";
import layout from "../templates/components/text-component";

import Theme from "@ivanvanderbyl/ember-material-components-theme/mixins/theme";
import Typography from "@ivanvanderbyl/ember-material-components-typography/mixins/typography";
import Rtl from "@ivanvanderbyl/ember-material-components-rtl/mixins/rtl";

export default Component.extend(Theme, Typography, Rtl, {
  layout
});
