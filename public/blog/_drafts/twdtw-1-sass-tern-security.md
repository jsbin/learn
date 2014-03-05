# TWDTW #1

This is the first installment of "things we did this week". Where we'll share some of the features or changes or fixes we've been working on. Sometimes it will be small features, sometimes BIG exciting features and other times it'll be progress to much longer term goals.

We're working on local branches of JS Bin with a few cool features.

## Sass

There's been [tons of demand](https://github.com/jsbin/jsbin/issues/176) for Sass support, but until we could pull it off on the client side, I wasn't sure it would land. Now thanks to [sass.js](https://github.com/medialize/sass.js/) and a few hours of hacking, JS Bin has a development branch with Sass (or more specifically SCSS) in a <abbr title="Pull Request">PR</abbr> [feature/scss](https://github.com/jsbin/jsbin/pull/1229) (see [Rodney Rehm's post](http://blog.rodneyrehm.de/archives/33-libsass.js-An-Emscripten-Experiment.html) on porting to sass.js). 

It does mean that Bourbon, Compass, et al aren't supported, but it's still a good step forward (and the changes also mean it's now easy to add server-based support for Sass - which will come soon).

![/images/twdtw/1/sass.png](/images/twdtw/1/sass.png)

(Demo pitched from [red-team-design.com](http://red-team-design.com/simple-scss-spinner-animation/))

## Tern

I'm proud to say that my company, [Left Logic](http://leftlogic.com) was the first to back *big* behind the Tern project last year. And this week [Giulia](http://github.com/electricg) has been adding support to JS Bin.

It'll be a user preference to enable, and we're working on dynamically loading definition files based on the contents of your bin (i.e. if you have jQuery, it'll automatically load the jQuery definition file for you).

![/images/twdtw/1/tern.gif](/images/twdtw/1/tern.gif)

## Security

Finally, [Fabien](http://github.com/allouis) has been doing lots of behind the scenes work that's starting to land in production behind feature flags (which allows us to test new features and letting us control how many people see them).

Specifically we've reinstated SSL support for login and register. We tried to apply SSL to all of JS Bin some many months back, but because the iframe that your output is rendered in is under https, it would block *all* assets in the iframe pointing to http - this would usually be included libraries, images, CSS, etc, etc. So we had to abandon it, and return with SSL for login and register:

![/images/twdtw/1/login.png](/images/twdtw/1/login.png)

SSL is likely to land next week, and this will also open the door to [editor settings and preferences](https://github.com/jsbin/jsbin/pull/1224) - without having to open devtools to have on the console!

## Totally aside

How seriously sweet is this!

<div class="embed-container"><iframe src="//player.vimeo.com/video/84938216" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>

And yes, I have actually asked myself: how could I get JS Bin to control a drone...insane, I completely appreciate.