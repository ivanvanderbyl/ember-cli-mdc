/* eslint-env node */

const { Blueprint } = require("ember-cli-blueprint-helpers");

module.exports = Blueprint.extend({
  addons: [
    { name: "@ivanvanderbyl/ember-material-components-button" },
    { name: "@ivanvanderbyl/ember-material-components-dom" }
  ]
});
