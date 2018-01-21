---
title: Debbugging your preferences
category: hack
---
# Debbugging your preferences

If you're having problems with preferences being saved (perhaps the right panels are not being shown that you've selected), it's sometimes useful to inspect the settings that are stored locally on the browser you're experiencing issues with.

Firstly you'll need to open your browsers developer tools. This is different for each type of browser (so if you're not familiar as to how, please run a [google search](https://www.google.co.uk/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=how+do+I+open+developers+tool+in+(safari+OR+chrome+OR+ie+OR+opera))).

Once the developer tools are open, in the *console* you should see a message similar to the one below:

![devtools open](/images/debugging-prefs-devtools.png)

Note that you need to enter an unlocking code to access your settings. In this case, I would simply type `ok3n8h1o` into the console and hit return.

Now you're able to copy the entire `jsbin` object and share it (jsbin support) for debugging.

In the console (again) run the command `JSON.stringify(jsbin)` and copy the response. Note that in chrome's console, you can run `copy(jsbin)` and this will copy for you.