# Protecting you from yourself

JS Bin has recently had some subtle changes that help protect you from bugs in your own code.

## Crash protection

Although we have loop protection in JS Bin, it's entirely possible that you JavaScript might side-step our protection, and crash the browser anyway.

If that happens, JS Bin will automatically disable the *live JavaScript rendering* when the page is refresh. This means that HTML & CSS is still live rendered, but the JavaScript waits for you to click "run with JS" (or use the <kbd>ctrl</kbd>+<kbd>return</kbd> shortcut).

![Automatically disabled](/images/blog/auto-disabled.png)

## Loop protection

We've long had [loop protection](https://www.youtube.com/watch?v=EA74ODg1qKE) (video) in JS Bin which meant if you accidently wrote an infinite loop, JS Bin would quietly exit out and warn in the browser console.

Now you'll see a warning either in the footer of the JavaScript panel, or in the gutter (if you have gutter warnings enabled in your [preferences](/account/preferences)).

![Loop protection in JS Bin](/images/blog/loop-protect.gif)

We've also made the [loop protection module available](http://github.com/jsbin/loop-protect) in our git repo under MIT, so you're welcome re-use it in your own projects.