/* eslint-env node */

const { Blueprint } = require("ember-cli-blueprint-helpers");

module.exports = Blueprint.extend({
  packages: [{ name: "@material/chips", target: "0.43.0" }],

  addons: [
    { name: "@ivanvanderbyl/ember-material-components-icon" },
    { name: "@ivanvanderbyl/ember-material-components-checkbox" },
    { name: "@ivanvanderbyl/ember-material-components-ripple" },
    { name: "@ivanvanderbyl/ember-material-components-typography" },
    { name: "@ivanvanderbyl/ember-material-components-elevation" },
    { name: "@ivanvanderbyl/ember-material-components-base" }
    //{name: '@ivanvanderbyl/ember-material-components-shape'},
  ]
});
