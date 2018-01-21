---
title: A change to the way our URLs work
author: remy
date: '2015-06-16'
published: true
---
# A change to the way our URLs work

We've just landed a change to the way JS Bin URLs work, and though the new way aims to be intuitive and backward compatible, some of you sharp sighted users might have spotted the change already and wondering what changed and why.

## In short

- Revisions are referred to as "snapshots".
- Snapshots (the numerical identifier) only appear in the URL when take a snapshot (and want to share that snapshot).
- The latest version is the default (i.e. without a number in the URL).
- The share menu has been updated to be simpler, whilst also more powerful.

## Revisions are now called snapshots

There's been some confusion of exactly what a revision was, and when they're created. There was also language that talked about creating "milestones".

So we've changed this all to read as a "snapshot".

A snapshot is a static moment in a bin's lifetime. The shortcut is <kbd>ctrl</kbd>+ <kbd>s</kbd> to create a snapshot of the current code.

## Snapshot numbers in URLs

A difference in the URLs you might notice is that you'll only see the snapshot number in the URL when you're looking at a *snapshot*. If you're looking at the **latest state of the bin, then there's no snapshot number**.

This makes URLs simpler, but also means it's easy for you to read a URL and know immediately if you're looking at the latest state or not.

## Sharing simplified

The share menu has also been updated to reflect this move to snapshots. *This* is where we feel the clarification will be intuitive. If you want to share a snapshot, there's no "lock revision" confusion, just the option to share the latest state or a snapshot (and changing what you want to share, automatically updates the URLs you can share).

![New share menu](/images/blog/new-share.png)

As you can see from the screenshot, the share menu also offers you direct links to the different sources. In my particular case, the JavaScript panel contains JSON, so the share menu has detected that giving me a direct link to the [JSON content](https://rem.jsbin.com/colefa.json).

## Codecasting by default

Now if you share the edit view of your bin and the latest state (ie. not a snapshot), then the viewer will automatically see a code casting view (where the code changes in real time as you change your code).

Although the old `/watch` URL will still work, you can share the regular `/edit` URL and this has all the code casting built in.