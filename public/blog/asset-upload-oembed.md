# Asset uploads & oEmbed

We said we'd be working on more pro features, and we are. Also, since we're open source, this awesome stuff happens from time to time: oEmbed as a community submitted feature.

![Pull request that landed oEmbed](/images/blog/oembed-pr.png)

## Asset uploads

As of today, I've released the asset upload feature to **all existing Pro users**. Simply drag & drop your assets into JS Bin and it'll upload instantly and insert an image tag with your newly uploaded asset.

Each pro user can host up to 1GB of assets - so that gives you a bit of freedom to sling up your images as quickly as you create bins.

To manage your assets, head over to the [assets](/account/assets) account page and you can delete files and check your usage.

You can see a demo of upload in action below:

<div class="embed-container"><iframe width="1280" height="720" src="//www.youtube.com/embed/d8TkAeGFLx4?rel=0" frameborder="0" allowfullscreen></iframe></div>

So what are you waiting for? Support JS Bin's continued development and [go pro today](/upgrade).

## oEmbed

Thanks to an awesome (and relatively simple) [pull request](https://github.com/jsbin/jsbin/pull/1984), JS Bin now also supports oEmbed for rich content - allowing you to oEmbed the *embed* view of your bin.

A simple call to http://jsbin.com/oembed?url=http://jsbin.com/fajac/3 (the Dave's demo page) yeilds the following JSON:

```json
{
  "type": "rich",
  "version": "1.0",
  "title": "JS Bin",
  "url": "http://jsbin.com/fajac/3/edit?html,output",
  "width": 640,
  "height": 480,
  "html": "<iframe src=\"http://jsbin.com/fajac/3/embed?html,output\" width=\"640\" height=\"480\" frameborder=\"0\"></iframe>"
}
```

And just like that, JS Bin links posted in [Gitter](https://gitter.im/) (the awesome chat client) pulls in a live embeded bin.