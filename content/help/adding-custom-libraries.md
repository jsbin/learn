---
title: How to add more libraries to the library list
category: hack
---
# Adding custom libraries

JS Bin comes with out of the box support for a number of libraries, but if you're comfortable in the developer tools, you can add your own.

The format for a new library entry is as follows:

```js
{ 
  text: 'My Category',
  requires: 'http://someotherlibary.com/lib.js', // optional
  style: 'http://someotherlibary.com/style.css', // optional
  scripts: [
    { text: 'My library', url: 'http://foo.com/somelib.js' }
  ]
}
```

There's a variable called libraries on the global namespace, with two methods: add and clear.

To add this library, open your browser based console, and run the following (changing the library for your own):

```js
var mylib = {...}; // the "My Library" object above
libraries.add(mylib);
```

These changes will save to your browser (on those browsers that support the Storage API - all the latest versions of browsers), and will remain until you call `libraries.clear()`.
