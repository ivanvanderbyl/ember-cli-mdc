"use strict";

module.exports = {
  name: "@ivanvanderbyl/ember-material-components-icon",

  included(app) {
    this._super(...arguments);

    if (process.env.CORBER) {
      this.ui.writeLine("Bundling Material Icon fonts with the application.");

      // We are using corber to build the application. This means that we need to
      // embed the icons in the application bundle.
      app.import(
        "node_modules/material-design-icons/iconfont/material-icons.css"
      );
      app.import(
        "node_modules/material-design-icons/iconfont/MaterialIcons-Regular.eot",
        { destDir: "assets" }
      );
      app.import(
        "node_modules/material-design-icons/iconfont/MaterialIcons-Regular.tff",
        { destDir: "assets" }
      );
      app.import(
        "node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff",
        { destDir: "assets" }
      );
      app.import(
        "node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff2",
        { destDir: "assets" }
      );
    }
  },

  contentFor(type, config) {
    this._super(...arguments);

    if (type === "head-footer") {
      if (!process.env.CORBER) {
        this.ui.writeLine("Linking Material Icon fonts with the application.");
        return '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />';
      }
    }
  },

  optionsFor(type, options) {
    if (type === "sass") {
      options.cacheInclude = options.cacheInclude || [];
      options.cacheInclude.push(/addon\.scss/);
      options.cacheInclude.push(/_app-theme\.scss/);
    }

    return options;
  }
};
