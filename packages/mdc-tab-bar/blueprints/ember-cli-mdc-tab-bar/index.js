/* eslint-env node */

const { Blueprint } = require("ember-cli-blueprint-helpers");

module.exports = Blueprint.extend({
  packages: [{ name: "@material/tab-bar", target: "0.43.1" }],

  addons: [
    { name: "@ivanvanderbyl/ember-material-components-elevation" },
    { name: "@ivanvanderbyl/ember-material-components-tab-scroller" }
  ]
});
