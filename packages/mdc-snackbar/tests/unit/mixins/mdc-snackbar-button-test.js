import EmberObject from "@ember/object";
import MdcSnackbarButtonMixin from "@ivanvanderbyl/ember-material-components-snackbar/mixins/mdc-snackbar-button";
import { module, test } from "qunit";

module("Unit | Mixin | mdc-snackbar-button", function() {
  // Replace this with your real tests.
  test("it works", function(assert) {
    let MdcSnackbarButtonObject = EmberObject.extend(MdcSnackbarButtonMixin);
    let subject = MdcSnackbarButtonObject.create();
    assert.ok(subject);
  });
});
