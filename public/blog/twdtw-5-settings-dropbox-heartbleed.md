# TWDTW #5 - Heartbleed, Settings, Dropbox

This week we've wrestled with the Heartbleed bug, shipped some new settings and released a new pro feature for internal testing.

## Heartbleed

The Heartbleed bug definately took it's toll in the office this week, after some initial panic [Remy](https://github.com/remy) 
updated our servers to patch the OpenSSL which was great, we were no longer vulnerable! 

During the update however our MySQL client had become incompatible with our MySQL server leaving us in an awkward position of 
not being able to release certain features that required a database change. 

This comic from [xkcd](http://xkcd.com) does a good job of simply explaining the issue

![Are you still there, server? It's me, Margaret.](http://imgs.xkcd.com/comics/heartbleed_explanation.png)

## Settings

[Giulia](https://github.com/electricg) has been continuing work on our account pages, with updates to the editor settings (Mentioned before in 
[TWDTW #3](http://jsbin.com/blog/twdtw-3-codemirror-settings#usersettings)) and created a page for managing your JS Bin
default preferences, such as your starting open panels. As with the rest of our account pages, these are still going through internal testing 
until they're all good for you people! 

![Preferences page](/images/twdtw/5/preferences.png)

## Dropbox

For the past couple of weeks I've been working on linking Dropbox accounts with JS Bin. We've got a version out for internal 
testing. This work has resulted in our [jobsworth](https://github.com/jsbin/jobsworth) module. jobsworth 
is a task manager that runs on [zeromq](http://http://zeromq.org/) and enables use to run all the Dropbox saving on a seperate
machine. 

The Dropbox functionality is still in it's early days and is very basic. We're currently saving all bins that we create, but this
will become customisable in the future. The format in which the bins are saved is a single html file that includes the panel content
as well as the compiled output as documented in [#609](https://github.com/jsbin/jsbin/issues/609).

## Totally aside

This is for anyone that's seen Gravity. And this is for anyone that hasn't - [8.1](http://www.imdb.com/title/tt1454468/)!

<div class="embed-container">
  <iframe width="1280" height="720" src="//www.youtube.com/embed/Gw79smKZB9E" frameborder="0" allowfullscreen></iframe>
</div>

