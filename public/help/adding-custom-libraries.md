# Adding custom libraries

JS Bin comes with out of the box support for a number of libraries, but if you're comfortable on the command line, you can add your own.

The format for a new library entry is as follows:

```json
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

To add this library, open your console, and run the following (changing the library for your own):

```js
libraries.add({ text: 'My Libraries', scripts: [ { text: 'Foo 1.0', url: 'http://foo.com/bar-1.0.js' } ] });
```

These changes will save to your browser (on those browsers that support the Storage API - all the latest versions of browsers), and will remain until you call `libraries.clear()`.