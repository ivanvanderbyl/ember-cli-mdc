"use strict";
/* eslint-env node */

// const SassPlugin = require("./lib/sass-plugin");

module.exports = {
  name: "@ivanvanderbyl/ember-material-components-sass",

  included: function(/* app */) {
    this._super.included.apply(this, arguments);
  },

  options: {
    sassOptions: {
      includePaths: ["node_modules/@material", "addon/styles"],
      onlyIncluded: true,

      importer: function(url, prev, done) {
        if (url.startsWith("@material")) {
          let file = url.replace(/@material\//, "");
          done({ file });
        } else {
          done({ file: url });
        }
      }
    }
  }

  // setupPreprocessorRegistry (type, registry) {
  //   registry.add ('css', new SassPlugin ({context: this}));

  //   registry.remove ('css', 'broccoli-sass');
  //   registry.remove ('css', 'ember-cli-sass');
  // },

  // included (app) {
  //   this._super (...arguments);

  //   if (!!app.project.addonPackages['ember-cli-sass'])
  //     throw new Error ('ember-cli-mdc is not compatible with ember-cli-sass. You must uninstall ember-cli-sass before continuing.');

  //   // see: https://github.com/ember-cli/ember-cli/issues/3718
  //   if (typeof app.import !== 'function' && app.app) {
  //     app = app.app;
  //   }

  //   this.app = app;
  // },

  // optionsFor (type, options) {
  //   if (type === 'sass') {
  //     if (!options.includePaths)
  //       options.includePaths = [];

  //     const includePaths = options.includePaths;

  //     if (!includePaths.includes ('node_modules'))
  //       options.includePaths.push ('node_modules');

  //     if (this.app.modulePrefix !== 'dummy') {
  //       if (!includePaths.includes ('app/styles'))
  //         includePaths.push ('app/styles');
  //     }
  //     else {
  //       if (!includePaths.includes ('tests/dummy/app/styles'))
  //         includePaths.push ('tests/dummy/app/styles');
  //     }

  //     if (process.env.EMBER_ENV === 'test') {
  //       if (!includePaths.includes ('tests/dummy/app/styles'))
  //         includePaths.push ('tests/dummy/app/styles');
  //     }
  //   }

  //   return options;
  // }
};
