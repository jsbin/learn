# TWDTW #8 - SVG support and user settings

With [Giulia](https://twitter.com/electric_g) back from holiday and [Remy](https://twitter.com/rem) easing back into work, the Left Logic offices
have been a bit more lively! 

## SVG Support

Last friday [Emil](https://twitter.com/ThatEmil) opened a [feature request](http://github.com/jsbin/jsbin/issues/1466) for us to handle SVG's in 
JS Bin, meaning you could use the html panel to author SVG markup, and then request jsbin.com/binid.svg and it would send the appropriate headers.
We all thought this was a pretty cool idea and fairly [trivial to implement](https://github.com/jsbin/jsbin/commit/59d729f3cade53ba10ca3c817daa51c1e36bce15)
so on tuesday we released! 

There's currently an issue with using `<object>` to display SVG's, it won't display correctly in the output panel, but
the full output renders correctly. sometimes. Try using an image tag and setting the src to `http://jsbin.com/davebot.svg` 

## User settings

We've spoken a fair bit about the upcoming user settings in JS Bin and today we've started on our staggered release, they'll now be availiable to
10% of users (Remy has documented [how this is done](https://github.com/remy/feature-gateway#examples) in the feature-gateway repo). So look out for
a different experience when you click your account icon. We'll be be eventually realising it to everyone over the course of a couple of weeks, whilst
we check server loads and analytics. 

## Bacon

I'll be attending the [BACON conference](http://devslovebacon.com/) and I'll be armed with JS Bin stickers, I look pretty much like my avatar,
so hit me up if you'd like a sticker!

## Totally aside

Myself and Giulia were in tears this week watching this clip on repeat, Nick Cage knows how to dive.

<div class="embed-container"><iframe width="1280" height="720" src="//www.youtube.com/embed/krotxywU2Es" frameborder="0" allowfullscreen></iframe></div>
