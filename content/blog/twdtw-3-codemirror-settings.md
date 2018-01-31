---
title: 'TWDTW #3: CodeMirror, User settings, Hacks'
author: remy
date: '2014-04-01'
published: true
---


Last week we rolled out [SSL support](/blog/ssl) for our sign in (long overdue), and this week we've had two pretty cool releases: CodeMirror 4 and (in private testing) user settings UI.

## CodeMirror 4

[CodeMirror](http://codemirror.net) is the excellent editor that backs JS Bin. Version 4 was released last week and on Tuesday it landed in JS Bin. The highlights for me personally are multiple cursors and sublime mode (via `jsbin.settings.addons.sublime = true`):

![/images/twdtw/3/cm4.gif](/images/twdtw/3/cm4.gif)

But isn't setting these [sweet addons](/blog/twdtw-2#userenabledaddons) via the console a bit tricky and maybe for the hacker?! Well, we've been working hard to introduce a "proper" UI which has gone live behind alpha flags so we can give it some production testing, so I'm expecting to release to public next week.

## User Settings

But take a look:

![/images/twdtw/3/settings.png](/images/twdtw/3/settings.png)

These settings will give you full control over how your editor works, and if you think anything is missing, we're looking for *your* input. We're also working on adding a JS Bin preferences panel to help manage your default templates and default processors (like Less or CoffeeScript) and more.

## The Autoprefixer hack - did you know...?

Last Friday I saw a [tweet asking for Autoprefixer support](https://twitter.com/pepelsbey_/status/449460914941853696) (which coincidently landed in our friendly neighbour CodePen about two hours after we replied with...): JS Bin is extremely maluable.

So we hacked together a bin that lets you run Autoprefixer entirely client side, and uses the CSS panel and the magical `%css%` value to post process *your* CSS through Autoprefixer.

Then in the afternoon [Giulia](http://github.com/electricg) added this to our library drop down, so if you select Autoprefixer, you can use the CSS panel without prefixes. All without a server side change. [Have a play](http://jsbin.com/xewil/1/edit).


## Totally aside

Fabien found and shared this site [8tracks](http://8tracks.com) that you can give it a tag, say "programming", and you can listen to tracks to suit that mood. So get your groove on.

![/images/twdtw/3/dance.gif](/images/twdtw/3/dance.gif)