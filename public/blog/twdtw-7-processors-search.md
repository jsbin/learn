# TWDTW #7 - SCSS, Compass and search

Whilst Fabien continues with [Pro user integration](/blog/twdtw-6-syncing-pro-accounts) and Giulia [goes on holiday](https://twitter.com/electric_g/status/460844432649355264), I've snuck out of paternity leave and cheekily completed a bit of dev. 

## SCSS, Compass and processors total upgrade

In the last year, I had to remove the Stylus processor because there was a weird bug that caused an infinite loop (both client *and* server side). And so it wasn't reintroduced until I knew we could run our server side processors in a separate process (currently JS Bin is entirely single threaded!).

In the same vein as [Jobsworth](/blog/twdtw-5-settings-dropbox-heartbleed#userbackups) (our zeromq based bin backup server, I've created [Pennyworth](https://github.com/jsbin/pennyworth): a server for running processors and spitting out rendered CSS, JavaScript or HTML.

There's a simple [markdown](https://github.com/jsbin/pennyworth/blob/master/targets/markdown/index.js) module, but more importantly to user demand, there's modules for SCSS and [SCSS with Compass](https://github.com/jsbin/pennyworth/blob/master/targets/sass-with-compass/index.js) (and more being adding before we go live - and I'd love contributions).

Here's a couple of shots using a couple of [Ana Tudor's](http://twitter.com/thebabydino) excellent SCSS demos:

![SCSS demos](/images/twdtw/7/scss.gif)

