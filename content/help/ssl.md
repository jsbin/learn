---
title: The state of SSL on JS Bin
category: fix
---
# The state of SSL on JS Bin

Currently only the login, register and (upcoming) account settings are served over SSL. The rest of JS Bin is not.

This is ultimately because JS Bin uses `iframe`s to render your code's preview, and any `iframe` served over HTTPS cannot serve resources from HTTP.

This means if you include a library or an image that's being served over HTTP, the live preview will *block* that resource. It might be JavaScript that the rest of your code relies on, in which case your code will break.

## Background

We did actually do a ton of work to get JS Bin [working entirely over SSL](https://github.com/jsbin/jsbin/pull/673) back in mid 2013, and it even got released...for a few minutes.

It was quickly reversed out because we spotted (and remembered) that the `iframe` was blocking the content. Some CDNs would support HTTPS for their scripts, but there's many, many bins out in the wild, and they would instantly break due to the non-HTTPS resources being blocked - which is unacceptable and against our [design principles](/help/design-principles).

So SSL for *all of JS Bin* was removed and later replaced with SSL for specific pages.

## Enabling SSL for all of JS Bin

Those users with pro accounts can enable SSL across all of JS Bin via [their preferences](http://jsbin.com/account/preferences). Note that extra care in including resources is needed, and to ensure they work, it's recommended you use [protocol relative](http://www.paulirish.com/2010/the-protocol-relative-url/) URLs.

Once this is enabled, visiting jsbin.com will redirect to https. However, not all JS Bin URLs will redirect. The following rules apply:

1. Sharing your own bins will be on https by default and visitors will also view those bins on https
- Visiting the JS Bin editor will *always* redirect to https
- You *can* share non-https URLs, but you need to change these manually
- Viewing another user's bins can be on http and will not redirect to https
- You *can* view another user's bin under https
- Other user's can't view their bins under https (if they haven't enabled the pro option)
- Embedded bins will maintain their protocol of their author

## SSL support in the open source project

Even though the [open source repository](https://github.com/jsbin/jsbin) has some hints of SSL support inside it, we don't actively support using SSL in local installations. This is mainly due to the bespoke set up with domains and SSL certificates we use in production, so we prefer a simpler local install.

SSL is provided through our proxy server using [nginx](http://wiki.nginx.org/Main) and there is some interest to explore [further SSL support](https://github.com/jsbin/jsbin/issues/1168) so please do get in touch if you have any success in this area.
