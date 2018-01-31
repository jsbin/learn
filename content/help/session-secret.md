---
title: Session Secrets
category: fix
---


If you see this warning message when running a local `jsbin` command, you'll want to set up a session secret.

```text
Warning: Generating a session key
```

It means that you have not configured a session secret in your config.local.json or ENV. If you want your sessions to persist between reboots you'll need to use the same one. JS Bin will generate a random 34 char key for you, you can choose to use this or one of your own.

You can either set an enviroment variable when you start `jsbin` (and this could be [added to your local profile](https://www.google.co.uk/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=adding+environment+variables+on+mac+OR+windows+OR+linux):

```shell
JSBIN_SESSION_SECRET=my_secret jsbin
```

Or you can add this directly to a your config.local.json like so:

```json
  {
    "session": {
      "secret": "bfksfysa7e32kdhayu292sz"
    }
  }
```
