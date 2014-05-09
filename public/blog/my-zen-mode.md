# How I run JS Bin in Zen mode!

Since using JS Bin, I've discovered a number of ways to customise it to my liking, and I wanted to share how I'm running in *Zen mode*!

![Zen mode](/images/jsbin-zen-mode-1.png)

## Vim mode

```javascript
  jsbin.settings.addons.vim = true;
```

Since we upgraded CodeMirror to version 4, we've added a lot of extra plugins for
CodeMirror, including Vim mode. Just note that not all of the Vim functionality
comes with the plugin, visual block mode, for example, doesn't work. But a lot of
the Ex commands are there, including search and replace, which is great, as JS Bin
doesn't support this in normal mode.

## Custom theme

```javascript
jsbin.settings.editor.theme = 'solarized light';
```

Solarized is a beautiful theme, I use everywhere (Terminal.app && Vim). We support
both light and dark solarized themes, I use the light theme in the browser.

## Default template

Default templates in JS Bin really make it your own, you can add default content
to all three of the input panels, so if you always use jQuery, you can have JS Bin
always include it for you. My default template is pretty simple 

### HTML

My default html panel just adds two metatags for webapps, and a custom title

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <title>@allouis_</title>
  </head>
  <body>

  </body>
</html>
```

### CSS

The default css panel just contains a basic reset

```css
html, body {
  margin: 0;
  padding: 0;
}
```

### JavaScript

This is my favourite of the panel templates, a single line, it just clears the console everytime 
the code is run!

```javascript
console.clear();
```

## Hidden toolbar

<kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>\</kbd>

The hidden topbar lets me really focus on the code, most of the items in the menus
can be accessed via keyboard shortcuts and for everything else, when I *do* need
it, the topbar pops open when you hover near it.

## Keyboard shortcuts

<kbd>ctrl</kbd>+<kbd>enter</kbd>

My favourite Js Bin keyboard shortcut, this command will force a re-render on your output, on
all devices, so it's pretty handy for mobile testing. It also runs all your JavaScript
so if you just have the console open, you can use it to run your code each time
you make changes

## Default panels

We've recently built a UI for setting all of the above functionality, so you don't have to set it via
the console, but it's still in alpha testing. Along with adding a UI to all these settings, it also
added some extra functionality, one of them being the default panels, meaning, everytime you load up
jsbin.com, which panels will be open/closed. I've got my setup so the two defaults are the Javascript
and the Console panels. Something I do pretty much anytime I use JS Bin is to put the console panel
*underneath* the Javascript one, you can simply drag the panel by its side and move it underneath. It
would be good to have the panel position configuration be saved to user settings, and this is something
we've spoken about and will be exploring internally.
