/* eslint-env node */

const { Blueprint } = require("ember-cli-blueprint-helpers");

module.exports = Blueprint.extend({
  packages: [{ name: "@material/tab-scroller", target: "0.43.1" }],

  addons: [
    { name: "@ivanvanderbyl/ember-material-components-animation" },
    { name: "@ivanvanderbyl/ember-material-components-base" },
    { name: "@ivanvanderbyl/ember-material-components-tab" }
  ]
});
