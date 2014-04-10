# Heartbleed on JS Bin

If you've not heard about [Heartbleed](http://heartbleed.com), means that **potentially** all your passwords can be compromised. This isn't a bug that's specific to JS Bin, it affects most sign in forms that go over HTTPS. Yes, it's **that** scary. 

Note that if you registered with JS Bin after 9-April 2014 10pm UK time, then you won't be affected, but I still strongly recommend you familiar yourself with the issue.

Here's what *we've* done:

- We've patched all our versions of OpenSSL
- We've re-issued our SSL certificate for our login and register
- We're recommending that you [change your password](/help/change-your-password)

We can't control when the old SSL certificate gets revoked (serial number 842265), but we've already seen people on the new certificate (serial number 1169237). You can check you have the updated certificate by clicking on the "pad lock", and digging into the certificate details, where you should see the issue "Not Valid Before" date, which will be 8 April 2014:

![/images/ssl-cert.png](/images/ssl-cert.png)

And importantly, what **you'll** need to (or I'm suggesting you) do:

1. If you're using Chrome, it doesn't check for revoked SSL certificates by default - you'll want to enable this:

![/images/chrome-revoke.png](/images/chrome-revoke.png)

2. Change your password
3. Log out and log back in again
4. Read up and share what you learn about Heartbleed