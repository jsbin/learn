# A change to the way URLs work

We've just landed a change to the way JS Bin URLs work, and though the new way aims to be intuitive and backward compatible, some of you pro users might be wondering what changed and why.

## Revisions are now called snapshots

There's been some confusion of exactly what a revision was, and when they're created. There was also language that talked about creating "milestones".

So we've changed this all to read as a "snapshot".

A snapshot is a static moment in a bin's lifetime. The shortcut is <kbd>ctrl</kbd>+ <kbd>s</kbd> to create a snapshot of the current code.

## Snapshot numbers in URLs

A difference in the URLs you might notice is that you'll only see the snapshot number in the URL when you're looking at a snapshot. If you're looking at the latest state of the bin, then there's no snapshot number. 

This makes URLs simpler, but also means it's easy for you to read a URL and know immediately if you're looking at the latest state or not.

## Sharing simplified

The share menu has also been updated to reflect this move to snapshots. *This* is where we feel the clarification will be intuitive. If you want to share a snapshot, there's no "lock revision" confusion, just the option to share the latest state or a snapshot (and changing what you want to share, automatically updates the URLs you can share).

## Automatic code casting

Now if you share the edit view of your bin and the latest state (ie. not a snapshot), then the viewer will automatically see a code casting view (where the code changes in real time as you change your code).

## Ownership of URLs

Previously, you only "owned" a URL if you were logged in when it was created. 

By owning a URL, it meant only the owner could create revisions on that URL. 

On the other hand though, if you created a bin whilst logged out, anyone could create revisions on that URL. Which could make a bit of a mess if you anonymously created a bin, then shared it on twitter (because subsequent changes to the bin would create the new latest revision on the same URL).

This changes today. If you're logged out, only the creator can create snapshots. We're using local storage to identify you as the owner of the particular bin (if you're logged out), and if this is cleared, then no one will be able to write to the bin URL anymore.

## Deleting

Previously, deleting a bin would delete the revision. Now deleting will delete the bin and all the snapshots attached. 

We also use the same method described above to allow anonymous users to delete their bins even after their session has expired.
