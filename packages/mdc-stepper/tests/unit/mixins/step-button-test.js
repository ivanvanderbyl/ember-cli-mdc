import EmberObject from "@ember/object";
import StepButtonMixin from "@ivanvanderbyl/ember-material-components-stepper/mixins/step-button";
import { module, test } from "qunit";

module("Unit | Mixin | step button");

// Replace this with your real tests.
test("it works", function(assert) {
  let StepButtonObject = EmberObject.extend(StepButtonMixin);
  let subject = StepButtonObject.create();
  assert.ok(subject);
});
