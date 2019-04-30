import EmberObject from "@ember/object";
import MenuSurfaceMixin from "@ivanvanderbyl/ember-material-components-menu-surface/mixins/menu-surface";
import { module, test } from "qunit";

module("Unit | Mixin | menu surface");

// Replace this with your real tests.
test("it works", function(assert) {
  let MenuSurfaceObject = EmberObject.extend(MenuSurfaceMixin);
  let subject = MenuSurfaceObject.create();
  assert.ok(subject);
});
