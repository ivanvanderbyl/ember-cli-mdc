/* eslint-env node */
module.exports = {
  description: "",

  normalizeEntityName() {}, // no-op since we're just adding dependencies

  afterInstall() {
    return this.addAddonsToProject({
      packages: [
        { name: "@ivanvanderbyl/ember-material-components-button" },
        { name: "@ivanvanderbyl/ember-material-components-card" },
        { name: "@ivanvanderbyl/ember-material-components-checkbox" },
        { name: "@ivanvanderbyl/ember-material-components-chips" },
        { name: "@ivanvanderbyl/ember-material-components-dialog" },
        { name: "@ivanvanderbyl/ember-material-components-drawer" },
        { name: "@ivanvanderbyl/ember-material-components-fab" },
        { name: "@ivanvanderbyl/ember-material-components-form" },
        { name: "@ivanvanderbyl/ember-material-components-htmlbars" },
        { name: "@ivanvanderbyl/ember-material-components-layout-grid" },
        { name: "@ivanvanderbyl/ember-material-components-linear-progress" },
        { name: "@ivanvanderbyl/ember-material-components-list" },
        { name: "@ivanvanderbyl/ember-material-components-select" },
        { name: "@ivanvanderbyl/ember-material-components-snackbar" },
        { name: "@ivanvanderbyl/ember-material-components-stepper" },
        { name: "@ivanvanderbyl/ember-material-components-switch" },
        { name: "@ivanvanderbyl/ember-material-components-tabs" },
        { name: "@ivanvanderbyl/ember-material-components-textfield" },
        { name: "@ivanvanderbyl/ember-material-components-top-app-bar" }
      ]
    });
  }
};
