---
title: The Return and The Refactor
author: remy
date: 2018-01-31
draft: true
---


Hello there dear reader. Remember me? 😃 It's been almost 2 years since the last blog post and I can imagine it has felt like JS Bin has been the same for a little while now.

The issue tracker was building up (a high of over 650 *open* issues) and various server problems have continued to roll in. The height of which was a notification from Amazon (where JS Bin hosts on AWS), telling me the server JS Bin runs on, will be terminated and removed from usage in 7 days! 😱

That last issue prompted a "quick" upgrade from node 0.10 to node 4, and then node 7. Which then triggered a cascade of problems to which eventually I threw my toys out of the pram and decided it was time to return to simpler times.

I started, from scratch, to write a _new_ JS Bin. The first (working, but utterly limited) version was this:

![early v5](/images/blog/early-v5.png)

In fact, this isn't much of a departure from the original, v1 of JS Bin from back in 2008 (sure, it's less orange though!):

![v1](/images/blog/v1.jpg)

So, I've been working on this new refactor since July 2017 on and off between "real" paid work and making slow progress.

## What does this mean?

It means there's going to be a new, streamlined, modern JS Bin available soon. Just as importantly, _all_ of the legacy code will be dispatched and the new code based entirely on modern development practises.

The biggest driver for the refactor is the constant downtime that JS Bin suffers for various reasons. This new, v5, version will run from entirely static content served over a CDN. It will have _minimal_ reliance on online servers so the webapp aims to be fully offline capable.

There will be a number of features that will be dropped, and there will be some functionality yet to be written (for instance, mobile support is great on current JS Bin, but terrible in v5).

The aim: back to simple. Simple and fast is what JS Bin was good at. Now I want to add reliable to those principles.

## Can you try it out?

Why yes, you can! And, if you don't like it, you can always "eject" back to JS Bin v4 (from the palette menu).

<button class="button call action big" onclick="document.cookie = 'version=v5; domain=.jsbin.com'; window.open('https://jsbin.com');">Try JS Bin v5 now</button>

Keep in mind that v5 is still in alpha, and there _will_ be some undocumented parts, some broken parts, some missing parts. If you feel there's something important or unobvious that's going wrong, there's a dedicated support link in v5 that you file an issue.

Thanks for reading, and I'll be in touch again with updates the progress of v5 development.
