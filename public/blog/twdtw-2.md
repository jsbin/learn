# TWDTW #2

This week we released more experiments, discovered one experiment going wrong (sad face), little two day retreat playing with arduinos and where I'll be about giving away some sweet [JS Bin stickers](http://www.flickr.com/photos/remysharp/9576228318/) and maybe even a [t-shirt](http://www.flickr.com/photos/remysharp/10805438263/) or two.

## User enabled addons

Code folding, matched brackets, trailing white spaces, and more. We all have our favourite features in the editors we love, and CodeMirror comes with a great deal of addons that historically I've been careful about enabling (since it adds to the footprint of the jsbin.js script request).

I've releases a dev feature (i.e. there's no interface, [yet](https://github.com/jsbin/jsbin/pull/1224)) that allows you to enable to lazy-load in a slew of addons from your browser console. For example, in the console if you run the following then refresh:

```js
jsbin.settings.addons.fold = true;
```

Gets you code folding:

![/images/twdtw/2/fold.png](/images/twdtw/2/fold.png)

Or maybe you're a Vim beast, easy:

```js
jsbin.settings.addons.vim = true;
```

[Addons will be documented](/help/addons) soon, but there are details in the pull request: [#1273](https://github.com/jsbin/jsbin/pull/1273).

## First pass at collaboration

[Giulia](http://github.com/electricg) took [together.js](http://togetherjs.com) and implemented under an experimental flag. 

Sadly, and due to no fault of Giulia's, using together.js just doesn't do the job properly. The way it works is this: whenever anyone makes a change, all of the text is sent and replaced in the collaborators window. This results in the *cursor position being reset* when this happens. 

As it turns out, this already affects *all* the sites that already use together.js with CodeMirror (the embedded editor that JS Bin uses).

So we're looking at whether we fork together.js and send a pull request to fix this, or go down the [share.js](https://github.com/share/ShareJS) route (which I personally think is highly likely for a few other reasons).

## A hardware retreat

Well, we didn't actually leave the office, but we did take a complete break from coding on JS Bin to experiment with [Arduinos](http://arduino.cc/), [Sparks](https://www.spark.io/), soldering irons, [Johnny Five](https://github.com/rwaldron/johnny-five/) and lots of LEDs.

![/images/twdtw/2/hack.jpg](/images/twdtw/2/hack.jpg)

Overall, great little fun. Though none of us managed to produce anything that we'll be recording videos for Kickstarter, we have now broadened the amount of things we don't know!

## Out and about

I'll be venturing out of sunny Brighton to a couple of London events, and I'll have a fistfull of JS Bin stickers (which are *really* nice quality) and a few t-shirts at [Edge London](http://lanyrd.com/2014/edgeconf/) and [LNUG](http://lanyrd.com/2014/lnug-march/). So come grab me!

## Totally aside

This shouldn't be funny, but it's utterly hypnotic...

<div class="embed-container"><iframe width="1280" height="720" src="//www.youtube.com/embed/ub1Dc3NHZ3s" frameborder="0" allowfullscreen></iframe></div>