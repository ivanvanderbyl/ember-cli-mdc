/* eslint-env node */

const { Blueprint } = require("ember-cli-blueprint-helpers");

module.exports = Blueprint.extend({
  packages: [{ name: "@material/slider", target: "0.43.0" }],

  addons: [
    { name: "@ivanvanderbyl/ember-material-components-animation" },
    { name: "@ivanvanderbyl/ember-material-components-base" },
    { name: "@ivanvanderbyl/ember-material-components-rtl" },
    { name: "@ivanvanderbyl/ember-material-components-theme" },
    { name: "@ivanvanderbyl/ember-material-components-typography" }
  ]
});
