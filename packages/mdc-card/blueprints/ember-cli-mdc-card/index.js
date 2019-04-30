/* eslint-env node */

const { Blueprint } = require("ember-cli-blueprint-helpers");

module.exports = Blueprint.extend({
  packages: [{ name: "@material/card", target: "0.43.0" }],

  addons: [
    { name: "@ivanvanderbyl/ember-material-components-elevation" },
    { name: "@ivanvanderbyl/ember-material-components-ripple" },
    { name: "@ivanvanderbyl/ember-material-components-rtl" },
    { name: "@ivanvanderbyl/ember-material-components-button" },
    { name: "@ivanvanderbyl/ember-material-components-icon-button" }
  ]
});
