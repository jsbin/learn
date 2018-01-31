---
title: What to do if your embed doesn't load
category: fix
---


There's a particular situations when your embedded bin is hidden then becomes
visible. It's still showing Dave's logo because there was no known height to
render to.

The embed code does try to handle common cases, such as using embeds inside
popular slide libraries like Reveal.js.

However, if you are presented with the Dave logo, then you can send a signal to
JS Bin like this:

```js
[].forEach.call(document.querySelectorAll('iframe'), function (iframe) {
  try {
    iframe.contentWindow.postMessage('jsbin:refresh', '*');
  }
});
```

This will tell JS Bin to refresh it's contents, which will cause the panels to
redraw and appear if you're seeing this issue.