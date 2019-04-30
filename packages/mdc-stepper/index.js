"use strict";

module.exports = {
  name: "@ivanvanderbyl/ember-material-components-stepper",

  included(app) {
    this._super(...arguments);

    app.import({
      development: "node_modules/@material/dom/dist/mdc.dom.js",
      production: "node_modules/@material/dom/dist/mdc.dom.min.js"
    });
  }
};
