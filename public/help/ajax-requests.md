# Ajax request to bins

JS Bin supports [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) and a number of different ways to access your bin's content using Ajax techniques.

## Response types

1. Full HTML output (including JS Bin edit link and live reload scripts)
- Full HTML output (excluding JS Bin edit link etc)
- Single panel output (using .js or .css)
- JSON for the JavaScript panel
- JSON bin object

## Example code

Below is a bin that can be tweaked to change the request it's making so you can see, live, what the impact of that change is:

<div><a class="jsbin-embed" href="https://jsbin.com/lupof/2/embed?js,console&height=400px">Ajax responses from JS Bin</a><script src="https://drt35l4oshkgr.cloudfront.net/js/embed.js"></script></div>

The example includes prepared ajax requests that are commented out. If you change the line from:

```js
/* 3. get the JavaScript panel as JSON
url: '//jsbin.com/xuyis/1.json',
dataType: 'json',
//*/
```

And add a leading `/` to the comment, the code will run:

```
//* 3. get the JavaScript panel as JSON
url: '//jsbin.com/xuyis/1.json',
dataType: 'json',
//*/
```

Try it out and see how the result changes.

*TODO: extend this article to show individual ajax requests.*