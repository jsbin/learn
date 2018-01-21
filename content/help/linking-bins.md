---
title: How to link multiple bins
category: learn
---
# How to link multiple bins

Sometimes you need to create a bin that pulls in some JSON data, makes ajax requests or perhaps includes multiple CSS resources.

You can do all this using JS Bin and maintaining multiple bins. Having a good knowledge of how [JS Bin URLs](/help/urls) work will benefit you too.

Simply create a bin that contains the data, and from your "main" bin, reference your data-based bin URL, either as a `script` include, or `link` resource or via an ajax request.

## External data & ajax

Say you want to include a large JSON file in an ajax request, simple create a separate bin with the JSON response content, and then make the ajax request to that bin URL.

Since making requests for bins without the revision always calls the latest, you can be sure the content is always up to date as you work on the two separate bins.

For example, the following bin is making a jQuery ajax request to the `//jsbin.com/megax.json` URL, which contains simple JSON in the JavaScript panel:

<div class="embed"><a class="jsbin-embed" href="http://jsbin.com/yuraf/2/embed?js,output">XHR requests to external data</a><script src="http://static.jsbin.com/js/embed.js"></script></div>

Note that the JS Bin URL **must** include the jsbin.com domain (but can be relative off the protocol), and in this example, I'm using a specific extension on the URL which tells JS Bin to serve this particular bin as `application/json` (other formats include `.js`, `.css`, etc)

***Pro tip:*** if you're logged in when you create the bin, then the latest revision will only ever belong to you. If you're logged out, you may need to reference a specific revision