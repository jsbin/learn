# How I run JS Bin in Zen mode!

Since using JS Bin, I've discovered a number of ways to customise it to my liking, and I wanted to share how I'm running in *Zen mode*!

## Vim mode

My editor of choice is Vim, and if you're a Vim user, using *normal* text inputs
can be really frustrating. Since we upgraded CodeMirror to version 4, we've added 
a lot of extra plugins for CodeMirror, including Vim mode. To turn this on you 
can just run `jsbin.settings.editor.vim = true;` in your console. Just note that
not all of the Vim functionality comes with the plugin, visual block mode, for 
example, doesn't work. But a lot of the Ex commands are there, including search 
and replace, which is great, as jsbin doens't support this in normal mode.

## Custom theme

I'll be quite frank, the default theme for CodeMirror/jsbin isn't the prettiest to
work with, so I've opted to use the solarized theme, it's the theme I use everywhere
else (Terminal.app && Vim). We support both light and dark solarized themes, I use
the light theme in the browser. To change your theme you can run `jsbin.settings.theme = 'solarized light';` 

## Default template

I the default template functionality, when I was mostly using jsbin for hacking
canvas experiments, I could just go to jsbin.com and have the canvas element in the DOM
with a loads of javascript functions already defined. Now, my default template is somewhat
simpler:

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

### JS

This is my favourite of the panel templates, a single line, it just clears the console everytime 
the code is run!

```javascript
  console.clear();
```

## Hidden toolbar

I've also chosen to hide the top toolbar, most of the bins I create now days use solely the 
javascript and console panel, getting rid of the top panel just lets me focus more on the
code I'm debugging/developing. To hide the top bar, you just use a keyboard shortcut `Cmd + Shift + \ `

## Keyboard shortcuts

Keyboard shortcuts in jsbin are *awesome*, I'm often using `Cmd + <number>` to open and close
panels if i do need to access the html/css/output panel. My two favourite shortcuts are `Cmd + /`
which you can probably guess, comments out the current line (yes, this still works in Vim mode)
and `Cmd + Enter` which does quite a few things, if you have the console panel open, it will run
the javascript panel's code in the console. It also re-renders the output, so if you are remotely 
viewing a bin, on a mobile device, for example, it will force a refresh on that page.

## Default panels

We've recently built a UI for setting all of the above functionality, so you don't have to set it via
the console, but it's still in alpha testing. Along with adding a UI to all these settings, it also
added some extra functionality, one of them being the default panels, meaning, everytime you load up
jsbin.com, which panels will be open/closed. I've got my setup so the two defaults are the Javascript
and the Console panels. Something I do pretty much anytime I use jsbin is to put the console panel
*underneath* the Javascript one, you can simply drag the panel by its side and move it underneath. It
would be good to have the panel position configuration be saved to user settings, and this is something
we've spoken about and will be exploring internally.

## Screenshots

![Zen mode](/images/jsbin-zen-mode-1.png)
