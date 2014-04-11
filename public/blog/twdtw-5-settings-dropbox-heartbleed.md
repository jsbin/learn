# TWDTW #5 - Heartbleed, Settings, User Backups

This week we've been dealing with the Heartbleed issue, but more positively have also shipped (for internal, but live testing) updates to user settings and a new pro feature: real-time backup of your bins.

## Heartbleed, no more

The Heartbleed bug definately took it's toll on [Remy](https://twitter.com/rem/status/454293558317821952) as he patched our OpenSSL, reissued SSL certificates and fixed weird [MySQL issues](http://stackoverflow.com/questions/22968867/error-1018-hy000-cant-read-dir-of-db-errno-13-not-a-permission/23014237), but we were [no longer vulnerable](/blog/heartbleed)!

This, from [xkcd](http://xkcd.com/1354/), does a good job of explaining the issue:

![Are you still there, server? It's me, Margaret.](http://imgs.xkcd.com/comics/heartbleed_explanation.png)

## JS Bin settings & preferences

[Giulia](https://github.com/electricg) has been continuing work on [our new account pages](/blog/twdtw-3-codemirror-settings#usersettings), with a new page for managing your default preferences, such as your starting open panels, templates, processors and so on.

We're hoping to release this to you all next week.

![Preferences page](/images/twdtw/5/preferences.png)


## User backups

For the past couple of weeks, I've been working on a new part of JS Bin called [Jobsworth](https://github.com/jsbin/jobsworth). This is a task manager that communicates using [zeromq](http://http://zeromq.org/) and contrary to it's name, will do our bidding. Initially backing up all my new bins to Dropbox in real-time (and we intend to add other services, like SkyDrive, Drive, etc).

The format of the file saved in which the bins are saved is a single HTML file that includes the full source of the bin, including pre-processor's source, which acts as an API for JS Bin importing too [#609](https://github.com/jsbin/jsbin/issues/609).

## Totally aside

If you've not seen the oscar winning [Gravity](http://www.imdb.com/title/tt1454468/), well, you should, but this is Gravity for those of you without much time on your hands - enjoy!

<div class="embed-container">
  <iframe width="1280" height="720" src="//www.youtube.com/embed/Gw79smKZB9E" frameborder="0" allowfullscreen></iframe>
</div>

