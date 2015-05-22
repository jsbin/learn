# Changing a username

Sometimes users request to change their username (usually if their github username doesn't match). This is not currently automated, so we have to manually update the database.

## Prerequisites

* Old username
* New (desired) username
* Ensure new username is available (or owned by the same user - i.e. a github account)

## Tasks

1. Update database
2. Clear memcache state for user
3. **Finally**, ask user to sign out and back in (as a precaution)

*Note: ensure to replace the variables in the examples below with the actual usernames.*

## Updating the database

Tables to update:

1. `ownership`
2. `owners`
3. `customers` (if user has a pro account)

```sql
update ownership set name="$NEW-NAME" where name="$OLD-NAME";
update owners set name="$NEW-NAME" where name="$OLD-NAME";
update customers set name="$NEW-NAME" where name="$OLD-NAME";
```

## Clear memcache

From the apps server:

```bash
$ cd /WWW/jsbin/bin
$ JSBIN_CONFIG=../../leftlogic-jsbin/config.local.json ./admin
Config from /WWW/leftlogic-jsbin/config.local.json
> clear $OLD-NAME
true
```

