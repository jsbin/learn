# SSL opt-in

SSL, that is, using `https` for *all* of JS Bin, can be enabled via [their preferences](http://jsbin.com/account/preferences). Note that extra care in including resources is needed, and to ensure they work, it's recommended you use [protocol relative](http://www.paulirish.com/2010/the-protocol-relative-url/) URLs.

Once this is enabled, visiting jsbin.com will redirect to `https`. However, not all JS Bin URLs will automatically redirect. The following rules apply:

1. Sharing your own bins will be on `https` by default and visitors will also view those bins on `https`
- Visiting the JS Bin editor will *always* redirect to `https`
- You *can* share non-`https` URLs, but you need to change these manually
- Viewing another user's bins can be on `http` and will not redirect to `https`
- You *can* view another user's bin under `https`
- Other user's can't view their bins under `https` (if they haven't enabled the pro option)
- Embedded bins will maintain their protocol of their author
