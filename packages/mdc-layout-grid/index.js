"use strict";

module.exports = {
  name: "@ivanvanderbyl/ember-material-components-layout-grid",

  optionsFor(type, options) {
    if (type === "sass") {
      options.cacheInclude = options.cacheInclude || [];
      options.cacheInclude.push(/addon\.scss/);

      options.cacheInclude.push(/@material\/layout-grid/);
    }

    return options;
  }
};
