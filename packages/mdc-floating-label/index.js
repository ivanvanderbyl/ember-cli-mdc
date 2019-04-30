"use strict";

module.exports = {
  name: "@ivanvanderbyl/ember-material-components-floating-label",

  included(app) {
    this._super(...arguments);

    app.import({
      development:
        "node_modules/@material/floating-label/dist/mdc.floatingLabel.js",
      production:
        "node_modules/@material/floating-label/dist/mdc.floatingLabel.min.js"
    });
  },

  optionsFor(type, options) {
    if (type === "sass") {
      options.cacheInclude = options.cacheInclude || [];
      options.cacheInclude.push(/addon\.scss/);
      options.cacheInclude.push(/_app-theme\.scss/);

      options.cacheInclude.push(/@material\/animation/);
      options.cacheInclude.push(/@material\/base/);
      options.cacheInclude.push(/@material\/floating-label/);
      options.cacheInclude.push(/@material\/rtl/);
      options.cacheInclude.push(/@material\/theme/);
      options.cacheInclude.push(/@material\/typography/);
    }

    return options;
  }
};
