---
title: FAQ
category: learn
---


## How long are bins kept for?

They're kept indefinitely. In JS Bin's early life, back in 2008, we removed them after not being seen for 3 months, but that's long been removed. Bins are permanent.

## How can I clear the console?

Very simple: `ctrl+l` from any panel, or using code: `console.clear()`.

## Can I run a Gist in JS Bin?

Funny you ask! Absolutely you can - just save the gist in Github, and either using the gist to [JS Bin bookmarklet][1], or change the url from [<http://gist.github.com/271333>][2] to [<http://jsbin.com/gist/271333>][3]

## Why does the JavaScript work when I didn't insert it?

When you tab to the output panel, JS Bin automatically inserts your JavaScript on the fly, so you don't need to worry about it.

## How does the error checking work?

Error checking is provided by the [JSHint project][4]. Like JSLint, but maintained and with a lovely API so it can plug it into JS Bin.

## Can I show just a single specific panel when loading a bin?

Appending a panel name to the query string will ensure that JS Bin only opens those specific panels. This is useful if you don't want the output to open for instance.

The valid values are: html, js, css, console, output.

Used as: [http://jsbin.com/iwovaj/74/edit?js,output](http://jsbin.com/iwovaj/74/edit?js,output)

## How do I insert my JavaScript in a specific position in the HTML?

Either insert the JavaScript directly in to the HTML panel, or you can use the special %code% command. Add it to your HTML and the contents of the JavaScript panel will be inserted at that point.

## How do I re-run or re-render the code?

Just click the "Run with JS" button, and your entire code will re-run, or ctrl (or cmd) + enter.

## Can JS Bin respond to Ajax requests?

Yes. See the [Ajax debugging video][5] for a demo. Or, it's as simple as removing the HTML output, saving the code, then requesting the URL via a new snippet. JS Bin will respond to Ajax requests appropriately.

## IE6?

I'm afraid not, but the application is open source, so if you think you can get it working - please go ahead: [<github.com/jsbin/jsbin][6]

## How do I delete my account?

Raise an [issue][7] with your username requested that we delete your account, and we'll do as asked.

## My question isn't answered

Please let [us know your question][8], and if appropriate we'll add it to the FAQ.

 [1]: javascript:(function()%7Bwindow.location='http://jsbin.com/gist'+window.location.pathname%7D)()
 [2]: http://gist.github.com/271333
 [3]: http://jsbin.com/gist/271333
 [4]: http://jshint.com/ "http://jshint.com/"
 [5]: http://jsbin.tumblr.com/post/9246335362/testing-ajax-rquests-one-of-js-bins-original "http://jsbin.tumblr.com/post/9246335362/testing-ajax-rquests-one-of-js-bins-original"
 [6]: http://github.com/jsbin/jsbin
 [7]: http://github.com/jsbin/jsbin/issues/new
 [8]: http://github.com/jsbin/learn/issues/new