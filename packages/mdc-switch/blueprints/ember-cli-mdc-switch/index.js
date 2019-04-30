/* eslint-env node */

const { Blueprint } = require("ember-cli-blueprint-helpers");

module.exports = Blueprint.extend({
  packages: [{ name: "@material/switch", target: "0.43.0" }],

  addons: [
    { name: "@ivanvanderbyl/ember-material-components-selection-control" },
    { name: "@ivanvanderbyl/ember-material-components-elevation" },
    { name: "@ivanvanderbyl/ember-material-components-rtl" }
  ]
});
