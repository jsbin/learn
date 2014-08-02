# jsbin.response.slow

Response time on JS Bin has been over 10 seconds for a prolonged period of time.

Typically this is caused by a single visitor abusing JS Bin or a bin that's causing a self-attack.

## Overview

1. Search logs of high requests from specific IP
2. Search logs to see what that IP is looking at
3. Investigate the bin and potentially delete bin or ban user
4. Potentially ban the IP

## Finding high number of requests

Run the following on `apps.jsbin.com`:

```text
sudo tail -1000 /var/log/upstart/jsbin.log  | awk '{print $1 }' | sort | uniq -c | sort -n | tail -10
```

You should find one (or more) IPs that have made a particularly large number of requests compared to other IPs.

## Search logs to see IP's activity

```
sudo grep 123.456.789.000 /var/log/upstart/jsbin.log | less
```

Where `123.456.789.000` is the IP you found.

If there is a specific bin that is being accessed a lot, visit

## Investigate bin

If a bin is found, it's recommend to visit the edit view of the bin, and force panels to HTML only and investigate from there: `http://jsbin.com/<bad-bin>/edit?html`

Based on what the bin is designed to do, you can chose to delete the bin (as you have admin rights).

Check the owner of the bin and potentially flag them using the admin tools on `apps.jsbin.com`:

```
cd /WWW/jsbin/
JSBIN_CONFIG=../leftlogic-jsbin/config.local.json bin/admin

admin> flag <username>
```

## Ban the IP

If the IP is causing abuse (i.e. hitting jsbin an unreasonable amount of times), then it can be blocked at the `iptables` level:

```
sudo iptables -I INPUT -s 123.456.789.000 -j DROP
```