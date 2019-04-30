"use strict";

module.exports = {
  name: "@ivanvanderbyl/ember-material-components-elevation",

  optionsFor(type, options) {
    if (type === "sass") {
      options.cacheInclude = options.cacheInclude || [];
      options.cacheInclude.push(/addon\.scss/);
      options.cacheInclude.push(/_app-theme\.scss/);

      options.cacheInclude.push(/@material\/animation/);
      options.cacheInclude.push(/@material\/elevation/);
      options.cacheInclude.push(/@material\/theme/);
    }

    return options;
  }
};
