/* eslint-env node */

const { Blueprint } = require("ember-cli-blueprint-helpers");

module.exports = Blueprint.extend({
  packages: [{ name: "@material/menu-surface", target: "0.43.0" }],

  addons: [
    { name: "@ivanvanderbyl/ember-material-components-elevation" },
    { name: "@ivanvanderbyl/ember-material-components-rtl" },
    { name: "@ivanvanderbyl/ember-material-components-shape" },
    { name: "@ivanvanderbyl/ember-material-components-base" }
  ]
});
