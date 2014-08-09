# discovering spam

Often spam links are farmed out to users via Facebook.

So far (in my own testing) using the following checks yields a 100% hit rate for finding spam.

So we tail the nginx access logs for referrals from Facebook, and check the contents of the bin, deciding either to delete the bin, or blacklist sections from the bin.

The following command tails the access log and prints the JS Bin URL that was accessed from Facebook:

```text
tail -f /var/log/nginx/jsbin.log | awk '$9!="410" && /facebook/ { print "http://jsbin.com"$7 }'
```

The simple task is to then follow the link and then action accordingly.