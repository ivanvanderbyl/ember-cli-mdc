"use strict";

module.exports = {
  name: "@ivanvanderbyl/ember-material-components-htmlbars",

  sassOptions(options) {
    options.cacheInclude = options.cacheInclude || [];
    options.cacheInclude.push(/addon\.scss/);
    options.cacheInclude.push(/_app-theme\.scss/);

    options.cacheInclude.push(/@material\/rtl/);
    options.cacheInclude.push(/@material\/theme/);
    options.cacheInclude.push(/@material\/typography/);

    return options;
  }
};
