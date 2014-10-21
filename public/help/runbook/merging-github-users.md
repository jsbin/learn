# Merging github user with regular user

When a user accidently creates a github based user, sometimes they either want it removed, or merged with their existing account, as seen in [issue #2061](https://github.com/jsbin/jsbin/issues/2061).

## Prerequisites

* Both usernames
* Clearly identify which username should be kept
* Access to the database (either via apps.jsbin or directly to db.jsbin)

You can double check users by visiting `http://jsbin.com/user/<username>`

## Simple case: github user has no bins

The tasks is to get the `github_id` from the github based user, and copy it across to the regular user, remove the github based user, then clear the memcache entry for both usernames.

```mysql
mysql> SELECT github_id FROM ownership WHERE name="github_based_user"\G
*************************** 1. row ***************************
    github_id: 123456
1 row in set (0.00 sec)
```

Now copy the github_id across to the regular user:

```mysql
mysql> UPDATE ownership SET github_id=123456 WHERE name="regular_user"\G
Query OK, 1 row affected (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 0
```

Next remove the github based user:

```mysql
mysql> DELETE FROM ownership WHERE name="github_based_user";
Query OK, 1 row affected (0.00 sec)
```

Finally, on the apps server, run the admin cli tool to clear the memcache entry for both users:

```nohighlight
remy@jsbin:~$ cd /WWW/jsbin/bin
remy@jsbin:/WWW/jsbin/bin$ JSBIN_CONFIG=../../leftlogic-jsbin/config.local.json ./admin
> clear github_based_user
true
> clear regular_user
true
```

As a final precaution, ask the user to log out of their account and re-log in. They should now be able to log in using their github account to access the `regular_user` account.