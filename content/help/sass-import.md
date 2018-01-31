---
title: "@import with Sass"
category: learn
---


In JS Bin you can import other bins with Sass really easily.

First write the bin you want to import, like in [this example](http://jsbin.com/piboc/2/edit).
```css
$a: red;
$b: orange;
$c: yellow;
$d: green;

body {
  color: $a;
}
```
Then create another bin where you call the `@import` function.

To use a specific version of the bin:
```css
@import 'piboc/2.scss';

body {
  color: $b;
}
```
To use the latest version of the bin:
```css
@import 'piboc.scss';

body {
  color: $b;
}
```
  
You can see the result in the final [live example](http://jsbin.com/jojiji/2/edit).

If you use SCSS syntax the extension of the file will be `.scss`, while with the Sass syntax the extension will be `.sass`.

## Bourbon

To use [Bourbon](http://bourbon.io/), simply use `@import 'bourbon/bourbon'`

```css
@import 'bourbon/bourbon';

html, body {
  height: 100%;
}
body {
  @include linear-gradient(red, orange, yellow, lime, green, cyan, blue, magenta);
  font-family: $helvetica;
}
```
[Live example](http://jsbin.com/weluha/1/edit)