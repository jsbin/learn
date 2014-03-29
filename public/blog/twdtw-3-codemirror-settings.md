# TWDTW #3

Last week we rolled out [SSL support](/blog/ssl) for our sign in (long overdue), and this week we've had two pretty cool releases: CodeMirror 4 and (in private testing) user settings UI.

## CodeMirror 4

[CodeMirror](http://codemirror.net) is the excellent editor that backs JS Bin. Version 4 was released last week and on Tuesday it landed in JS Bin. The highlights for us here are:

- Multiple cursors (on by default)
- Sublime mode turned on via `jsbin.settings.addons.sublime = true`

But isn't setting these [sweet addons](/blog/twdtw-2#userenabledaddons) via the console a bit tedious?! So we've been working hard to introduce a "proper" UI which has gone live behind alpha flags so we can give it some production testing, so I'm expecting to release to public next week.

## User Settings

But take a look:

- CodeMirror 4
- User settings

## In development


## The Autoprefixer hack - did you know...?

This morning I saw a [tweet asking for Autoprefixer support](https://twitter.com/pepelsbey_/status/449460914941853696) (which coincidently landed in our friendly neighbour CodePen about two hours after we replied with...): JS Bin is extremely maluable. So we hacked together a bin that lets you run Autoprefixer entirely client side, and uses the CSS panel and the magical `%css%` value to post process *your* CSS through Autoprefixer.



- Dropbox pro support
- totally aside: 8tracks

