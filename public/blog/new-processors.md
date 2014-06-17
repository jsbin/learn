# New processors. We need your input

We're doing the final testing on our new processor code. Sass and SCSS have been in high demand for a long time ([#176](https://github.com/jsbin/jsbin/issues/176)), which has driven this rewrite ([#1229](https://github.com/jsbin/jsbin/pull/1229)).

But we now need input from **you**.

## Compass, Bourbon, et al

Currently our thinking is this: we'll run both Sass and SCSS using the compass compile tool. So if you want to include Bourbon, you just import it.

I'm not particularly a pro user of CSS preprocessors, so I'm not 100% sure if this what people expect or not. I like that everything is just there, and you don't have to mess around selecting the right config option in your bin.

**A question to you:** what extensions would you want to be available?

A nice benefit to our system, is that imports from one bin to another just works. The same way as being able to [reference the JavaScript from one bit to another](http://jsbin.com/help/linking-bins) to create Ajax requests.

## Other processors

We're in the process of [documenting](/help/adding-processors) how you add more processors, and currently support (in our rewrite):

* **JavaScript**: CoffeeScript, React (JSX), Traceur, Processing, TypeScript
* **CSS**: Less, Stlyus, Sass, SCSS
* **HTML**: Jade, Markdown

**A question to you:** are there others that we should add?

I've thought about adding [sweet.js](http://sweetjs.org/), and equally I can see how all the new processors might just spiral the options out of control!

JS Bin's ethos is that the processor should work in the client side, but I've made an exception for Sass and SCSS (due to the sheer demand), so I'm willing to make exceptions for other processors if there's the demand.

## Get yourself heard

This is your oppotunity to tell us what you think. What's important to you and whether there's something obvious we're missing.

Either comment below, or comment directly on the [pull request for the feature](https://github.com/jsbin/jsbin/pull/1229).