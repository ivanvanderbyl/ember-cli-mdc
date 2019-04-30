/* eslint-env node */

const { Blueprint } = require("ember-cli-blueprint-helpers");

module.exports = Blueprint.extend({
  packages: [{ name: "@material/select", target: "0.43.0" }],

  addons: [
    { name: "@ivanvanderbyl/ember-material-components-floating-label" },
    { name: "@ivanvanderbyl/ember-material-components-line-ripple" },
    { name: "@ivanvanderbyl/ember-material-components-notched-outline" },
    { name: "@ivanvanderbyl/ember-material-components-ripple" },
    { name: "@ivanvanderbyl/ember-material-components-rtl" },
    { name: "@ivanvanderbyl/ember-material-components-typography" }
  ]
});
