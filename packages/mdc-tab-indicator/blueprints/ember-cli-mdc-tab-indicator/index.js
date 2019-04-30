/* eslint-env node */

const { Blueprint } = require("ember-cli-blueprint-helpers");

module.exports = Blueprint.extend({
  packages: [{ name: "@material/tab-indicator", target: "0.43.0" }],

  addons: [
    { name: "@ivanvanderbyl/ember-material-components-icon" },
    { name: "@ivanvanderbyl/ember-material-components-animation" },
    { name: "@ivanvanderbyl/ember-material-components-base" },
    { name: "@ivanvanderbyl/ember-material-components-theme" }
  ]
});
