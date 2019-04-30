/* eslint-env node */

const { Blueprint } = require("ember-cli-blueprint-helpers");

module.exports = Blueprint.extend({
  addons: [
    { name: "@ivanvanderbyl/ember-material-components-dialog" },
    { name: "@ivanvanderbyl/ember-material-components-icon-button" },
    { name: "ember-moment" },
    { name: "ember-fullcalendar" }
  ]
});
