/* eslint-env node */

const { Blueprint } = require("ember-cli-blueprint-helpers");

module.exports = Blueprint.extend({
  packages: [{ name: "@material/checkbox", target: "0.43.0" }],

  addons: [
    { name: "@ivanvanderbyl/ember-material-components-selection-control" },
    { name: "@ivanvanderbyl/ember-material-components-rtl" },
    { name: "@ivanvanderbyl/ember-material-components-form-field" },
    { name: "@ivanvanderbyl/ember-material-components-typography" }
  ]
});
