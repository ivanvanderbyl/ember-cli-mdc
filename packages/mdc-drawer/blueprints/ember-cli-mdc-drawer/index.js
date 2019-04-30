/* eslint-env node */

const { Blueprint } = require("ember-cli-blueprint-helpers");

module.exports = Blueprint.extend({
  packages: [{ name: "@material/drawer", target: "0.43.0" }],

  addons: [
    { name: "@ivanvanderbyl/ember-material-components-list" },
    { name: "@ivanvanderbyl/ember-material-components-base" },
    { name: "@ivanvanderbyl/ember-material-components-elevation" }
  ]
});
