# TWDTW #8 - SVG support and settings live

With [Giulia](https://twitter.com/electric_g) back from holiday and [Remy](https://twitter.com/rem) easing back into work, the Left Logic offices
have been a bit more lively, and pushing a few more bits to production.

## SVG Support

We just landed SVG support in JS Bin. Simply add `.svg` to the bin URL, and JS Bin will correctly serve up the HTML content panel as SVG with the correct headers. So now you can easily [prototype SVG](http://jsbin.com/gecew.svg) using JS Bin:

```html
<img src="http://jsbin.com/gecew.svg" alt="Source: http://jsbin.com/gecew/edit">
```

<img alt="Source: http://jsbin.com/gecew/edit" title="Source: http://jsbin.com/gecew/edit" src="http://jsbin.com/gecew.svg" height="200" width="658">

<small>Thanks to <a href="https://twitter.com/jorgeATGU">@jorgeATGU</a> for the SVG madness!</small>

The feature request came through from [Emil on twitter](https://twitter.com/ThatEmil/status/464665080005951488), suggesting that the `.svg` extension serve up the right headers. So we opened a [feature request](http://github.com/jsbin/jsbin/issues/1466), and [one simple change](https://github.com/jsbin/jsbin/commit/59d729f3cade53ba10ca3c817daa51c1e36bce15) later it was live.

Emil also [blogged about his own workflow](http://thatemil.com/blog/2014/05/14/using-js-bin-as-an-svg-playground/) with JS Bin and SVGs. It's *that* easy to help make JS Bin a better product.

## User settings live

![/images/twdtw/8/settings.png](/images/twdtw/8/settings.png)

We've spoken a [fair](/blog/twdtw-3-codemirror-settings#usersettings) [bit](/blog/twdtw-4-tern-pro-features#tern) [about](/blog/twdtw-5-settings-dropbox-heartbleed#jsbinsettingspreferences) the upcoming user settings in JS Bin and today we've started our staggered release.

We're releasing to 10% of users ([using our feature flags](https://github.com/remy/feature-gateway#ab-testing)) to start with to monitor the affect on our infrastructure (since we've moved to a memcache system for our sessions), and we'll quickly increase this to 100% over the coming days (and weeks).

## Want a JS Bin sticker? At BACON conf?

I'll be attending the [BACON conference](http://devslovebacon.com/) and I'll be armed with a swath JS Bin stickers, I look pretty much like my avatar,
so hit me up if you want one for your laptop!

## Totally aside

Myself and Giulia were in tears this week watching this clip over and over and over: Nick Cage knows us how to dive:

<div class="embed-container"><iframe width="1280" height="720" src="//www.youtube.com/embed/krotxywU2Es?version=3&amp;loop=1&amp;playlist=krotxywU2Es" frameborder="0" allowfullscreen></iframe></div>
