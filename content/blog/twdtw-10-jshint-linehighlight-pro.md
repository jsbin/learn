---
title: 'TWDTW #10: JSHint, line highlighting and update on pro'
author: remy
date: '2014-06-20'
published: true
---


Today we pushed a fairly hefty release containing a few PRs to update libraries, but also a few extra features for all our users.

## JSHint

We've finally got around to updating JSHint (whilst still providing support to IE8 by serving an old version for them). More importantly, for those of you who have [registered](http://jsbin.com/register), you can now configure your default JSHint [preferences](http://jsbin.com/account/preferences):

![/images/twdtw/10/jshint-prefs.png](/images/twdtw/10/jshint-prefs.png)

## Line highlighting

The original precursor to JS Bin had line highlighting and sharing (from back in 2007), and it's a great feature that we use all the time in Github, so I went ahead and implemented support in JS Bin. You need line numbers enabled (either from preferences, or the shortcut double click on the panel title, like "HTML").

Now when you click in the gutter, it'll highlight that line for sharing. You can also shift+click to select a range:

![/images/twdtw/10/line-highlight.png](/images/twdtw/10/line-highlight.png)

## An update on Pro

Pro is all about making JS Bin sustainable so we can continue to keep JS Bin free and for education and making JS Bin the best tool it can be for teaching.

Tweets like this is why we need you to go pro:

> Best @CodeClub ever! @js_bin you are a life saver... – [Oli Evans on Twitter](https://twitter.com/olizilla/status/480011434513162240)

We've been working hard towards releasing Pro which will initially include: vanity URLs, read/write API access, private bins, dropbox sync, beta access to features and first line support.

So tell your friends, your co-workers, help support JS Bin and look out for the release coming very soon.