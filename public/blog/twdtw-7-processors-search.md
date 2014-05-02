# TWDTW #7 - SCSS, Compass and search

Whilst Fabien continues with [Pro user integration](/blog/twdtw-6-syncing-pro-accounts) and Giulia [goes on holiday](https://twitter.com/electric_g/status/460844432649355264), I've snuck out of paternity leave and cheekily completed a bit of dev.

## SCSS, Compass and processors total upgrade

In the last year, I had to remove the Stylus processor because there was a weird bug that caused an infinite loop (both client *and* server side). Since JS Bin is single threaded(!) Stylus can't be reintroduced until it's running in a separate process.

In the same vein as [Jobsworth](/blog/twdtw-5-settings-dropbox-heartbleed#userbackups) (our zeromq based bin backup server), I've created [Pennyworth](https://github.com/jsbin/pennyworth): a server for running processors and spitting out rendered CSS, JavaScript or HTML.

There's a simple [markdown](https://github.com/jsbin/pennyworth/blob/master/targets/markdown/index.js) module, but more importantly to user demand, there's modules for [SCSS](https://github.com/jsbin/pennyworth/blob/master/targets/scss/index.js) and [SCSS with Compass](https://github.com/jsbin/pennyworth/blob/master/targets/sass-with-compass/index.js) (and more being adding before we go live).

Here's a couple of shots using a couple of [Ana Tudor's](http://twitter.com/thebabydino) excellent SCSS demos:

![SCSS demos](/images/twdtw/7/scss.gif)

Once I'm back from paternity leave (in 2 weeks) I'll be focused on releasing this entirely.

## Help & blog search

This part of JS Bin (the blog and help) are statically generated using [Harp](http://harpjs.com/), which makes search a little tricky (and bin searching is also on the roadmap, but a separate issue for now).

I've hacked in a simple solution that generates a static JSON file with all the words from the content on help & blog. It's not perfect, and requires JavaScript right now (and no keyboard support yet), but it's a start to jump to content a little quicker.

![Search example](/images/twdtw/7/search.png)

## Totally aside

It's a bank holiday weekend here in the UK, which means most of us have Monday off. So what to do with all this free time? How about melting your brain on TV?

[Huffington Post](http://www.huffingtonpost.com/2014/05/01/binge-watching-chart-_n_5246342.html) rescues us from a hard decision:

![TV brain melt](/images/twdtw/7/tv-brain-melt.jpg)