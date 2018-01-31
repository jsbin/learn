---
title: Heartbleed and JS Bin
author: remy
date: '2014-04-10'
published: true
---


If you've not heard about [Heartbleed](http://heartbleed.com), means that **potentially** all your passwords can be compromised. This isn't a bug that's specific to JS Bin, it affects most sign in forms that go over HTTPS. Yes, it's **that** scary. 

Note that if you registered with JS Bin after 9-April 2014 10pm UK time, then you won't be affected, but I still strongly recommend you familiar yourself with the issue.

Here's what *we've* done:

- We've patched all our versions of OpenSSL
- We've re-issued our SSL certificate for our login and register
- We're recommending that you [change your password](/help/change-your-password)

We can't control when the old SSL certificate gets revoked (serial number 842265), but we've already seen people on the new certificate (serial number 1169237). You can check you have the updated certificate by clicking on the "padlock", and digging into the certificate details, where you should see the issue "Not Valid Before" date, which will be 8 April 2014:

![/images/ssl-cert.png](/images/ssl-cert.png)

Note that if you use Chrome, you'll also need to ensure your browser checks for revoked SSL certificate by default:

![/images/chrome-revoke.png](/images/chrome-revoke.png)

And importantly, what **you'll** need to (or I'm suggesting you) do:

* Change your password
* Log out and log back in again (to clear your session based on the old SSL certificate)
* Read up and share what you learn about Heartbleed

We could (technically) reset everyone's password, but it's not that simple for us to code up, and really the complexity is in the user flow, and getting it right. So I decided against it in the end.

Some good resources I've found are:

* [Everything you need to know about Heartbleed](http://www.troyhunt.com/2014/04/everything-you-need-to-know-about.html) - very good if you're at all technical and need to get a grip on the issues
* [Big web sites affected](http://mashable.com/2014/04/09/heartbleed-bug-websites-affected/) - I found this pretty useful for what to tell non-technical people I know