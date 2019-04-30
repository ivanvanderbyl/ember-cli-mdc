"use strict";

module.exports = {
  name: "@ivanvanderbyl/ember-material-components-menu-surface",

  included(app) {
    this._super(...arguments);

    app.import({
      development:
        "node_modules/@material/menu-surface/dist/mdc.menuSurface.js",
      production:
        "node_modules/@material/menu-surface/dist/mdc.menuSurface.min.js"
    });
  }
};
