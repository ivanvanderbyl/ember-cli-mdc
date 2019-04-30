/* eslint-env node */

const { Blueprint } = require ('ember-cli-blueprint-helpers');

module.exports = Blueprint.extend ({
  packages: [
    {name: '@material/animation', target: '0.41.0'}
  ],

  addons: [
    {name: '@ivanvanderbyl/ember-material-components-sass', blueprintOptions: {save: true}}
  ]
});
