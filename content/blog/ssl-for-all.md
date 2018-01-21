---
title: SSL now available to all
author: remy
date: '2015-06-21'
published: true
---
# SSL now available to all

As the web moves towards using HTTPS everywhere, JS Bin has *moved* SSL from being a "pro only" feature to making it available to **everyone** as of today.

![SSL for all](/images/blog/ssl-for-all.png)

This means that you can now swap HTTP for HTTPS and [JS Bin will load](https://jsbin.com). Remember there are [considerations with SSL](/help/ssl) so if you're using HTTPS and the content doesn't load, it's likely there's an HTTP based script in there somewhere.

If you're stickler for security, registered users can opt-in to default to SSL via the [account preferences](https://jsbin.com/account/preferences) - which means whenever you visit a JS Bin edit page, you'll be put on HTTPS.

You *do* need a pro account to embed bins over SSL, and this will remain a pro feature.

What this does mean is that I've started to lay the foundations to add offline support via Service Worker - **and pro users, I have something new for you in a few days too** - so stay tuned!

## Google's 203 on HTTPS everywhere

I also highly recommend checking out Jake & Paul's 203 conversation on HTTPS everywhere:

<div class="embed-container"><iframe width="1280" height="720" src="//www.youtube.com/embed/_RwzMCRsneU" frameborder="0" allowfullscreen></iframe></div>
