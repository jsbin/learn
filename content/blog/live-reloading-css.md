---
title: Live reloading CSS
author: remy
date: '2015-07-04'
published: true
---



Due to a few recent optimisations in the JS Bin rendering logic, we now have live reloading CSS in the editor.

This means that when you change any content in the CSS panel, as always, the output is updated in real time, except now *only* the CSS will change.

So any JavaScript or existing DOM state will remain in it's current state and your styles will change. This also applies to any of the CSS processors, such as Sass, SCSS, Myth, etc.

You can see a short demo below - note that the JavaScript canvas animation continues to run and the counter increases:

<div class="embed-container"><iframe width="1280" height="720" src="https://www.youtube.com/embed/aglvbxjHmd0?rel=0" frameborder="0" allowfullscreen></iframe></div>

## Technical behind the scenes

This change is due to a small optimisation I made to JS Bin's rendering. We use [promises](http://www.html5rocks.com/en/tutorials/es6/promises/) under the hood, but before we would always create a new promise for all the panels when *any* panel changed.

[Now the code](https://github.com/jsbin/jsbin/blob/4644d8518868e4f8bcf330eafeeb1daa535c8ca3/public/js/render/render.js#L35-L52) will *only* re-render the promise of the focused panel. Since you can call the `.then` on a fulfilled promise over and over, it allows me to re-use the previously rendered promises.

The two benefits are that it was easy to add live reloading of CSS, but also live rendering is also now faster, as there's less work for your browser to do.

