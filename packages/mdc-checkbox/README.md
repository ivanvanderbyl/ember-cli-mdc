@ivanvanderbyl/ember-material-components-checkbox
======================

ember-cli addon for [`@material/checkbox`](https://github.com/material-components/material-components-web/tree/master/packages/mdc-checkbox).

Installation
------------

    ember install @ivanvanderbyl/ember-material-components-checkbox

Components
-----------

This package contains the following top-level components.

* [`{{mdc-checkbox}}`](#mdc-checkbox)
* [`{{mdc-checkbox-with-label}}`](#mdc-checkbox-with-label)

mdc-checkbox
---------------------

### Description

A standalone checkbox input element that does not contain a label.

### Usage

```handlebars
{{mdc-checkbox checked=checked disabled=disabled}}
```

### Attributes

* **`checked`** - The checkbox is checked.
* **`disabled`** - The checkbox is disabled.

mdc-checkbox-with-label
------------------------------

### Description

A checkbox input element that contains a label.

### Usage

```handlebars
{{#mdc-checkbox-with-label checked=checked disabled=disabled alignEnd=true}}
  This is a checkbox that contains a label. You can add HTML styling
  tags here to make a more complex label.
{{/mdc-checkbox-with-label}}
```

### Attributes

* **`checked`** - The checkbox is checked.
* **`disabled`** - The checkbox is disabled.
* **`alignEnd`** - Align the checkbox after the label.
