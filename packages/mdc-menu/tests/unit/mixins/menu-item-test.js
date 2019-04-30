import EmberObject from "@ember/object";
import MenuItemMixin from "@ivanvanderbyl/ember-material-components-menu/mixins/menu-item";
import { module, test } from "qunit";

module("Unit | Mixin | menu item");

// Replace this with your real tests.
test("it works", function(assert) {
  let MenuItemObject = EmberObject.extend(MenuItemMixin);
  let subject = MenuItemObject.create();
  assert.ok(subject);
});
