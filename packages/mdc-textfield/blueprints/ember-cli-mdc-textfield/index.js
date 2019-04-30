/* eslint-env node */

const { Blueprint } = require("ember-cli-blueprint-helpers");

module.exports = Blueprint.extend({
  packages: [{ name: "@material/textfield", target: "0.43.1" }],

  addons: [
    { name: "@ivanvanderbyl/ember-material-components-animation" },
    { name: "@ivanvanderbyl/ember-material-components-base" },
    { name: "@ivanvanderbyl/ember-material-components-ripple" },
    { name: "@ivanvanderbyl/ember-material-components-rtl" },
    { name: "@ivanvanderbyl/ember-material-components-theme" },
    { name: "@ivanvanderbyl/ember-material-components-typography" },
    { name: "@ivanvanderbyl/ember-material-components-icon" },
    { name: "@ivanvanderbyl/ember-material-components-floating-label" },
    { name: "@ivanvanderbyl/ember-material-components-line-ripple" },
    { name: "@ivanvanderbyl/ember-material-components-notched-outline" },
    { name: "@ivanvanderbyl/ember-material-components-shape" }
  ]
});
