# TWDTW #11 - A week of security

This last week has had a particularly strong focus on security. Some of these changes might also have a direct impact on the way you use JS Bin.

## Lint all the things!

After last week's release of JSHint setting control, [Giulia](https://github.com/electricg) released the new HTML, CSS and CofeeScript linting control. All available under the [preferences](http://jsbin.com/account/preferences) and all of them take a JSON object to control your defaults.

The error reporting has also had an upgrade, so you can set if you want errors in the footer of the panel, next to the line or under the line - or even all three!

![/images/twdtw/11/linting.png](/images/twdtw/11/linting.png)

## Limited full output for anonymous bins

If a bin is created by an anonymous user, the full output (that is: with the JS Bin editor stripped away) is only available for 90 minutes after creation. After which the URL will redirect to the editor view.

If you're (freely) registered *anyone* can always view your full output. This change applies to all anonymously created bins as of around July 3, 2014 at 4pm GMT.

JS Bin has long been a target for spam and phishing and this is first change that would outwardly impact our users. After speaking to many of you, and taking your feedback, I feel like this change is the right balance between starting to address the issue, but also maintaining flexibility for those of you who use JS Bin for teaching.

## General security

We've updated our SSL certificate for another 4 years until 2018 and recently closed latest [openssl security issue](https://www.openssl.org/news/secadv_20140605.txt) (which you should read up on if you manage servers).

There was also an issue reporting that the `jsbin.state` and user object could be accessed, which has been also closed. The impact of which is that JS Bin can't be set in an iframe anymore *but* of course you can still [embed](/help/how-can-i-embed-jsbin) (and if you happen to point an iframe to JS Bin, it'll automagically switch to embed mode for you).

Finally, if you're security concious, we'll be [adding SSL for all](/help/ssl#enablingsslforallofjsbin) of JS Bin for pro users as a configurable preference (you just need to make sure your external assets are [protocol relative](http://www.paulirish.com/2010/the-protocol-relative-url/) because you can run into trouble):

![All of JS Bin under SSL](/images/twdtw/11/ssl.png)