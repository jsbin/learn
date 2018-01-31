---
title: Protecting you from yourself
author: remy
date: '2014-08-08'
published: true
---


JS Bin has recently had some subtle changes that help protect you from bugs in your own code.

## Crash protection

Although we have loop protection in JS Bin, it's entirely possible that your JavaScript might side-step our protection, and crash the browser anyway.

If that happens, JS Bin will automatically disable the *live JavaScript rendering* when the page is refresh. This means that HTML & CSS is still live rendered, but the JavaScript waits for you to click "run with JS" (or use the <kbd>ctrl</kbd>+<kbd>return</kbd> shortcut).

![Automatically disabled](/images/blog/auto-disabled.png)

## Loop protection

We've long had [loop protection](https://www.youtube.com/watch?v=EA74ODg1qKE) (video) in JS Bin which meant if you accidently wrote an infinite loop, JS Bin would quietly exit out and warn in the browser console.

> To disable the loop protection: add the following in your JavaScript:
> ```
> // noprotect
> ```

Now you'll see a warning either in the footer of the JavaScript panel, or in the gutter (if you have gutter warnings enabled in your [preferences](/account/preferences)).

![Loop protection in JS Bin](/images/blog/loop-protect.gif)

We've also made the [loop protection module available](http://github.com/jsbin/loop-protect) in our git repo under MIT, so you're welcome re-use it in your own projects.
