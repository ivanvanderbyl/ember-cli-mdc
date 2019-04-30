/* eslint-env node */

const { Blueprint } = require("ember-cli-blueprint-helpers");

module.exports = Blueprint.extend({
  packages: [{ name: "@material/elevation", target: "0.43.0" }],

  addons: [
    { name: "@ivanvanderbyl/ember-material-components-animation" },
    { name: "@ivanvanderbyl/ember-material-components-theme" }
  ]
});
