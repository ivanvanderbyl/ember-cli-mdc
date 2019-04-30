/* eslint-env node */

const { Blueprint } = require("ember-cli-blueprint-helpers");

module.exports = Blueprint.extend({
  packages: [{ name: "@material/menu", target: "0.43.0" }],

  addons: [
    { name: "@ivanvanderbyl/ember-material-components-menu-surface" },
    { name: "@ivanvanderbyl/ember-material-components-ripple" },
    { name: "@ivanvanderbyl/ember-material-components-list" }
  ]
});
