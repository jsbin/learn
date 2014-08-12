# Why doesn't <object> work?

You might have tried to use an `<object>` tag in JS Bin, i.e. for SVG, and noticed that *nothing* appears.

This appears to be a quirk in modern browsers (or certainly Chrome) where the `<object>` can't be rendered inside and iframe (which we use for our real-time output).

The solution is to pop-out the output window (or open a new windown pointing to the same URL without `/edit` on the end), and now the `<object>` will render, and the window will live-reload as you code in the main edit view.