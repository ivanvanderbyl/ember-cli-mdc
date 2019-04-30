"use strict";

module.exports = {
  name: "@ivanvanderbyl/ember-material-components-menu",

  included(app) {
    this._super(...arguments);

    app.import({
      development: "node_modules/@material/menu/dist/mdc.menu.js",
      production: "node_modules/@material/menu/dist/mdc.menu.min.js"
    });
  }
};
