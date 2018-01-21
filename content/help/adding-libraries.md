---
title: Adding Libraries
category: hack
related:
- adding-custom-libraries
- versions
---
# Adding Libraries

You can manually [add custom libraries](/help/adding-custom-libraries) to your own instance of JS Bin, however if there's an important library or framework that many others want to use, then it makes sense to have it included in JS Bin's library selector:

![Libraries dropdown open](/images/libraries.png)

You will need to [fork the JS Bin](github.com/jsbin/jsbin/fork) Github repository, and edit `/public/js/editors/libraries.js`.

⚠️ The library and any related assets that are included in the library **must** be served over https otherwise the pull request cannot be accepted.

In general, a library tends to be stand alone, i.e. the paper.js library, so it only requires a new object in the `libraries` array with a label and a URL:

```js
{
  url: 'https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.9.12/paper.js',
  label: 'Paper.js'
},
```

If the library has other prerequisite, like a CSS file or another JavaScript library (like jQuery), the `url` property can also accept an array:

```js
{
  url: [
    'https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/css/normalize.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/css/foundation.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/js/vendor/modernizr.js',
    'https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/js/vendor/jquery.js',
    'https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/js/foundation.min.js'
  ],
  label: 'Foundation 5.5.2'
},
```

If the library being added has multiple options, such as combinations of popular builds of Angular, then a `group` property with the same value can be included and JS Bin will automatically group these options together.

Finally, in the rare case that additional code is required when the library is included that will make the user's workflow better, there is support for a `snippet` property, as seen in the Autoprefixer example below:

```js
{
  url:'https://rawgithub.com/ai/autoprefixer-rails/master/vendor/autoprefixer.js',
  label: 'Autoprefixer',
  snippet: '<style type="unprocessed" id="AutoprefixerIn">%css%</style>\n<style id="AutoprefixerOut"></style>\n<script>\nAutoprefixerSettings = ""; //Specify here the browsers you want to target or leave empty\ndocument.getElementById("AutoprefixerOut").innerHTML = autoprefixer(AutoprefixerSettings || null).process(document.getElementById("AutoprefixerIn").innerHTML).css;\n</script>'
},
```

Once you've made your changed, send a [pull request](https://github.com/jsbin/jsbin/pulls) and it will be reviewed and merged if successful.
