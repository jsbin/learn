# Experimental Features

*Updated: 2014-10-30*

Experiments are beta features available to [pro users](/upgrade). We first release our experiments to our alpha users (core team and a small collection of industry experts), then the features that are stable enough are moved to beta where you can access them if you choose.

Importantly, some features may never make it to production and equally may be buggy.

This document will change over time as feature change.

## Experiential beta features

To enable experiments head to your [profile](/account/profile) page and check the "Enable experiments" box.

### API

JS Bin's read/write API is currently under the experiments.

- `DELETE /api/$bin/$snapshot`
- `GET /api/$bin/$snapshot`
- `POST /api/save` new bin, accepts JSON object with `javascript`, `html`, `css` and `settings` (object)
- `POST /api/$bin/save` create a new snapshot
- `GET /api` lists all bins

*Further documentation to come.*

To make a request, first you need the [API token for your account](/account/profile) or to generate a new&nbsp;token:

![API key](/images/api-key.png)

To make the request, the token must be included in the `Authorization: Token $token` header:

```shell
curl -X "GET" "https://jsbin.com/api/" \
  -H "authorization: token 51af795cf1a606fe2e19d8c77bff3cb866f98d16" \
  -H "content-type: application/json"
```

JS Bin will will respond with `200 OK` for successful requests, and `401 Forbidden` for unauthorized.

### Fine grain control over bin headers

The infocard (that appears on the editor at the bottom right) has been upgraded to include the ability to manage the title, description, status code and headers for the bin. Useful for mocking response handlers with different statuses (like a 404 or 500) or setting a custom content type or setting a CSP header.

![Bin info extended](/images/bin-info-expanded.png)

### More layouts

JS Bin's panels can be pre-arranged in a number of different orientations. Available from the [preferences](/account/preferences) under "Layout" in the Panels section. There is also an [open issue]( https://github.com/jsbin/jsbin/issues/2007) that proposes to make this control easier to access. So please do get involved if you have ideas.