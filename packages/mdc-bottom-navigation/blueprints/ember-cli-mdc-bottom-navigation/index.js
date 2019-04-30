/* eslint-env node */

const { Blueprint } = require("ember-cli-blueprint-helpers");

module.exports = Blueprint.extend({
  addons: [
    { name: "@ivanvanderbyl/ember-material-components-theme" },
    { name: "@ivanvanderbyl/ember-material-components-icon" },
    { name: "@ivanvanderbyl/ember-material-components-ripple" },
    { name: "@ivanvanderbyl/ember-material-components-typography" },
    { name: "@ivanvanderbyl/ember-material-components-elevation" }
  ]
});
