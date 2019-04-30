@ivanvanderbyl/ember-material-components-fab
======================

ember-cli addon for [`@material/fab`](https://github.com/material-components/material-components-web/tree/master/packages/mdc-fab).

Installation
------------

    ember install @ivanvanderbyl/ember-material-components-fab

Components and Mixins
-----------------------

### Components

* [`{{mdc-fab}}`](#mdc-fab)
* [`{{mdc-fab-link-to}}`](#mdc-fab-link-to)

### Mixins

* [`Fab`](#fab)

{{mdc-fab}}
---------------

### Description

Add a floating action button component to the page.

### Usage

```handlebars
{{mdc-fab icon="add"}}
{{mdc-fab icon="add" mini=[true|false]}}

<!-- extended floating action buttons -->

{{mdc-fab icon="add" label="Create"}}
{{mdc-fab icon="add" label="Create" labelPosition="left"}}
{{mdc-fab label="Create"}}
```

### Attributes

* `icon` - The icon to display on the floating action button.
* `mini` - Make it a mini floating action button.
* `label` - Label displayed on the extended floating action button.
* `labelPosition` - The position of the label in relation to the icon; default is `right`.

{{mdc-fab-link-to}}
---------------------

### Description

Add a link component that displays as a floating action button.

### Usage

```handlebars
{{mdc-fab-link-to "" "index" icon="add" label="Create"}}
```

For the time being, the first parameter must be a string, which will be ignored. We hope
to have this requirement removed in the near future.

Fab
-----------

### Description

The `Fab` mixin allows you to convert any component into a floating action button.

### Usage

```javascript
import Fab from '@ivanvanderbyl/ember-material-components-fab';
import Component from '@ember/component';

export default Component.extend (Fab, {

});
```