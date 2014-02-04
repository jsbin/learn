# How can I embed JS Bin?

JS Bin can be embedded in your site with very little work. The easiest way is to simply change the ending url `/edit` to `/embed` and wrap the url in an iframe.

If you want JS Bin to inject the iframe for you, and progressively enhance a link to the bin, you can use the share menu and copy and paste from there:

![The embed panel in JS Bin](/images/embed-small.gif)

## Specifying panels

By default, JS Bin will embed the live output panel. Panels are specified in the query string as such:

> http://jsbin.com/iwovaj/73/embed?js,html,output

Remember you can also point an embed to your latest bin (in the above example, you would use `latest` instead of `73`).

Each panel can be specified by changing the checkboxes in the *Panels* heading under share:

![Share panel options](/images/panel-options.png)

## Setting the height and width

JS Bin is designed to fill the space it contains, so naturally the iframe's width will fill to the width of it's container.  The default *minimum* height is 300px, but will automatically resize to fill the height of the output of your bin (i.e. if your bin shows off something that's 500px tall, the iframe will be loaded at that height).

To change these dimensions, you can pass in any height or width value on the query string:

1. Height at 3 rems: http://jsbin.com/iwovaj/73/embed?html,output&height=3rem
2. Height at 150px: http://jsbin.com/iwovaj/73/embed?html,output&height=150px
3. Width & height at 500px: http://jsbin.com/iwovaj/73/embed?html,output&height=500px&width=500px


## Live example

Here it is in action, do check the source code too :)

<div class="embed-container">
  <a class="jsbin-embed foo" href="http://jsbin.com/iwovaj/74/embed?js,output">Simple Animation Tests</a><script src="http://static.jsbin.com/js/embed.js"></script>
</div>


<!--
## Related

[How to automatically "edit" in JS Bin]() -->