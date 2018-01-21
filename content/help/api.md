---
title: JS Bin API
category: hack
---
# Is there an API?

JS Bin's API comes in a few flavours.

1. Get data
2. Post data for pro user accounts (to be detailed)

## Read API

## Write API

A simple REST based API exists for anonymous users if it is enabled in your config.\*.json, or can be restricted to registered users with a key specified in `ownership.api_key`

Authentication is required for all API requests unless one of the following api configuration options are set:

- `api.allowAnonymousReadWrite` - if set to true allows GET and POST operations to the API anonymously (without an API key)
- `api.allowAnonymousRead` - if set to true allows GET operations to the API anonymously (without an API key)

By default, `config.default.json` has `api.allowAnonymousRead` set to true.

Curl authentication examples:

```text
$ curl http://{{host}}/api/:bin -H "Authorization: token {{token_key}}"
$ curl http://{{host}}/api/:bin?api_key={{token_key}}
```

End points are:

- `GET /api/:bin` - Retrieve the latest version of the bin with that specified ID
- `GET /api/:bin/:rev` - Retrieve the specific version of the bin with the specified ID and revision
- `POST /api/save` - Create a new bin, the body of the post should be URL encoded and contain `html`, `javascript` and `css` parameters
- `POST /api/:bin/save` - Create a new revision for the specified bin, the body of the post should be URL encoded and contain `html`, `javascript` and `css` parameters
