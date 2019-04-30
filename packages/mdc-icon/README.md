@ivanvanderbyl/ember-material-components-icon
======================

ember-cli addon for [Material Icons](https://material.io/tools/icons/)

Installation
------------

    ember install @ivanvanderbyl/ember-material-components-icon

Components
-----------

This package contains the following top-level components.

* [`{{mdc-icon}}`](#mdc-icon)

mdc-icon
---------------------

### Description

Adds a Material Icon element.

The icon is described by its name, which is the same name that appears in the icon
font for the corresponding icon. The easiest method to locate the icon name is to
search for the icon at [Material Icons](https://material.io/tools/icons/).

### Usage

```handlebars
{{mdc-icon name}}
```

### Positional Parameters

* **`name`** - Name of the icon

### Examples

```handlebars
{{mdc-icon "delete"}}     {{!-- create a delete icon --}}
{{mdc-icon "wifi"}}       {{!-- create a wifi icon --}}
{{mdc-icon "close"}}      {{!-- create a close icon --}}
```

## Coloring Icons

### Using CSS Styles

You color an icon using the `color` CSS style. For example, if you want to color the
delete icon red, then we first create a CSS class that has the property `color:red`.

```css
.red-icon {
  color: red;
}
```

Then, assign the CSS class to the icon.

```handlebars
{{mdc-icon "delete" class="red-icon"}}
```

Now, the delete icon will render in red.

### Using Themes

The `{{mdc-icon}}` component supports the
[TextTheme](https://github.com/onehilltech/ember-cli-mdc/blob/master/packages/mdc-theme/addon/mixins/text-theme.js)
mixin. This exposes the `themeTextColor`, `theme`, and `themeTextStyle` attributes on the `{{mdc-icon}}`
component.

```handlebars
{{mdc-icon "favorite" themeText="primary"}}
{{mdc-icon "favorite" theme="light" themeTextStyle="disabled"}}
```
