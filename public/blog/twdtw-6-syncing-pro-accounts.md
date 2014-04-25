# TWDTW #6 - Bin files, Dropbox, Pro Accounts

This week we've been doing mostly internal updates to JS Bin, so not much to see. I've been working on updating the way in which we create HTML
files from bins and we're gonna start to experiment with two-way syncing with [Dropbox](http://dropbox.com)

## Bin files

Transforming a Bin into a html file has always been done by JS Bin - to display your output in the iframe, but this week I've been creating a module
to create more than just a renderable file, but a file that stores both the raw panel content and the content *after* it has gone through 
preproccesors. This will eventually allow files in this format to be dropped into JS Bin and populate all the panels, cool!

## Dropbox

[Remy](https://twitter.com/rem) and I were talking about our Dropbox linking being more than just saving - but syncing, where any changes made to your files on Dropbox would then be reflected in JS Bin. We're hoping to have two-way 
syncing of bins to Dropbox ready to be tested internally by next week. Here's how the current dropbox linking works:
<div class="embed-container">
 <iframe name='quickcast' src='http://quick.as/embed/4qb1f7bg' scrolling='no' frameborder='0' width='100%' allowfullscreen></iframe><script src='http://quick.as/embed/script/1.50'></script>
</div>

## Pro Accounts

Our pro account offering is being polished for when Remy returns to the office and we can release them, [Danny](https://twitter.com/yandle) popped in
this week to go over the designs and user flow from registered or anonymous to pro and I've been compiling a list of all JS Bins current and future 
features, it's a lot bigger than I thought!

## Totally aside

Also, a very big congratulations to Remy and [Julie](https://twitter.com/julieanne) - they've had a beautiful baby girl :D!

![](/images/twdtw/6/baby.png)
