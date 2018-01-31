---
title: How to disable JS Bin keyboard shortcuts
category: fix
---


If you're finding there's issues with all or most of JS Bin's keyboard shortcuts,
perhaps you're using a keyboard that we're not able to bind the shortcuts correctly.

You need to open your browser's developer tools, and from the console run the
following command:

```js
jsbin.settings.keys = { disabled: true };
```

Now hit refresh and JS Bin will not bind [keyboard shortcuts](/help/keyboard-shortcuts).

Note that as we use [CodeMirror](http://codemirror.net) for the editor, and [Emmet](http://emmet.io/) these shortcuts may still be in place.