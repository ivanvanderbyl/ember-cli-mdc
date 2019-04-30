/* eslint-env node */

const { Blueprint } = require("ember-cli-blueprint-helpers");

module.exports = Blueprint.extend({
  packages: [{ name: "@material/list", target: "0.43.0" }],

  addons: [
    { name: "@ivanvanderbyl/ember-material-components-ripple" },
    { name: "@ivanvanderbyl/ember-material-components-rtl" },
    { name: "@ivanvanderbyl/ember-material-components-typography" },
    { name: "@ivanvanderbyl/ember-material-components-icon" }
  ]
});
