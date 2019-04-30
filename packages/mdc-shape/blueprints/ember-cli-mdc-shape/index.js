/* eslint-env node */

const { Blueprint } = require("ember-cli-blueprint-helpers");

module.exports = Blueprint.extend({
  packages: [{ name: "@material/shape", target: "0.43.0" }],

  addons: [
    {
      name: "@ivanvanderbyl/ember-material-components-sass",
      blueprintOptions: { save: true }
    }
  ]
});
