---
title: Adding new pre-processors
category: fix
---
# Adding processors

Adding processors to JS Bin requires changes to the server side of JS Bin *and* the client side. This article explains how to implement a processor.

If you're contributing a new processor to JS Bin, you will need to include the processor for [local](#localinstalls), [production](#production) and the [client side](#clientsidechanges). The process is relative simple, and documented below.

The processor will need a unique name which is the id for the processor, such as `coffeescript`.

## Local installs

Processors are forked directly off the main Node process. There are a number of specific changes required.

### Support and mime types

In [`lib/processors/index.js`](https://github.com/jsbin/jsbin/blob/feature/scss/lib/processors/index.js) add the name of processor in the `supports` property.

Also add the mime type for the processor type and any applicable aliases, such as Markdown having `md`, `mdown` and `markdown`.

Finally, the `lookup` property is which panel the processor is found in. i.e. Sass is in `css`, and Markdown is in `html`.

### The processor

Next, create a new file in `lib/processors` with the name of the processor, such as `coffeescript.js`. The processor must export a function that accepts the `source` and returns a new promise. i.e.:

```js
'use strict';
var RSVP = require('rsvp');
var coffee = require('coffee-script');

module.exports = function (source) {
  return new RSVP.Promise(function (resolve, reject) {
    try {
      resolve(coffee.compile(source, {
        bare: true
      }));
    } catch (e) {
      reject(e);
    }
  });
};
```



## Production

JS Bin runs it's processors on a separate machine using a service we call [Pennyworth](http://github.com/jsbin/pennyworth).


## Client side changes

TODO...