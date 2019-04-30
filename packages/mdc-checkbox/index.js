"use strict";

module.exports = {
  name: "@ivanvanderbyl/ember-material-components-checkbox",

  included(app) {
    this._super(...arguments);

    app.import({
      development: "node_modules/@material/checkbox/dist/mdc.checkbox.js",
      production: "node_modules/@material/checkbox/dist/mdc.checkbox.min.js"
    });
  },

  optionsFor(type, options) {
    if (type === "sass") {
      options.cacheInclude = options.cacheInclude || [];
      options.cacheInclude.push(/addon\.scss/);
      options.cacheInclude.push(/_app-theme\.scss/);

      options.cacheInclude.push(/@material\/animation/);
      options.cacheInclude.push(/@material\/base/);
      options.cacheInclude.push(/@material\/checkbox/);
      options.cacheInclude.push(/@material\/form-field/);
      options.cacheInclude.push(/@material\/ripple/);
      options.cacheInclude.push(/@material\/rtl/);
      options.cacheInclude.push(/@material\/selection-control/);
      options.cacheInclude.push(/@material\/theme/);
      options.cacheInclude.push(/@material\/typography/);
    }

    return options;
  }
};
