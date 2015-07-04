# Keyboard Shortcuts

JS Bin supports keyboard shortcuts when the editor panels are focused (i.e. you have a cursor). Shortcuts can also be [disabled](/help/disabling-all-keyboard-shortcuts) if desired.

## Application level

|Shortcut|Action|
|---|---|
|<kbd>ctrl</kbd>+<kbd>?</kbd>|Show keyboard shortcuts|
|<kbd class="same">ctrl</kbd>+<kbd>shift</kbd>+<kbd>/</kbd>|Search help|
|<kbd class="same">ctrl</kbd>+<kbd>l</kbd>|Clear the console|
|<kbd>ctrl</kbd>+<kbd>return</kbd>|Run code and send live reload|
|<kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>del</kbd>|Delete the current bin|
|<kbd>ctrl</kbd>+<kbd>s</kbd>|Save current state as a revision|
|<kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>s</kbd>|Create a clone of the current bin|
|<kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>\</kbd>|Hide JS Bin navigation bar|
|<kbd>ctrl</kbd>+<kbd>o</kbd>|Open bin history (when logged in)|
|<kbd>ctrl</kbd>+<kbd>y</kbd>|Toggle archive state on the current bin|

Note that all changes in any code panel (excluding the console) both triggers a save to the current bin *and* triggers a live reload on any viewers watching your bin url.

## Code based

|Shortcut|Action|
|---|---|
|<kbd>ctrl</kbd>+<kbd>/</kbd>|Toggle comments on the selected lines|
|<kbd>ctrl</kbd>+<kbd>[</kbd>|Indent selected lines|
|<kbd>ctrl</kbd>+<kbd>]</kbd>|Unindent selected lines|
|<kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>L</kbd>|Beautify code|

## HTML & CSS panel

|Shortcut|Action|
|---|---|
|<kbd>tab</kbd>|Code expansion using Emmet|
|<kbd class="same">ctrl</kbd>+<kbd>alt</kbd>+<kbd>right</kbd>|Next edit point|
|<kbd class="same">ctrl</kbd>+<kbd>shift</kbd>+<kbd>y</kbd>|Evaluate mathematical expression|
|<kbd>alt</kbd>+<kbd>up</kbd>|Increment number by 0.1|
|<kbd>alt</kbd>+<kbd>down</kbd>|Decrement number by 0.1|
|<kbd class="same">ctrl</kbd>+<kbd>up</kbd>|Increment number by 1|
|<kbd class="same">ctrl</kbd>+<kbd>down</kbd>|Decrement number by 1|
|<kbd>alt</kbd>+<kbd class="same">ctrl</kbd>+<kbd>up</kbd>|Increment number by 10|
|<kbd>alt</kbd>+<kbd class="same">ctrl</kbd>+<kbd>down</kbd>|Decrement number by 10|

## HTML panel

|Shortcut|Action|
|---|---|
|<kbd>ctrl</kbd>+<kbd>.</kbd>|Close previous HTML tag|

## JavaScript panel

|Shortcut|Action|
|---|---|
|<kbd>tab</kbd>|Code complete (using Tern or otherwise)|

## Console panel

|Shortcut|Action|
|---|---|
|<kbd>up</kbd>/<kbd>down</kbd>|Up/down through console history|
|<kbd>return</kbd>|Execute command|


## Showing and hiding panels

|Shortcut|Action|
|---|---|
|<kbd>ctrl</kbd>+<kbd>0</kbd>|Hide currently focused panel|
|<kbd>ctrl</kbd>+<kbd>1</kbd>|Toggle HTML panel|
|<kbd>ctrl</kbd>+<kbd>2</kbd>|Toggle CSS panel|
|<kbd>ctrl</kbd>+<kbd>3</kbd>|Toggle JavaScript panel|
|<kbd>ctrl</kbd>+<kbd>4</kbd>|Toggle console panel|
|<kbd>ctrl</kbd>+<kbd>5</kbd>|Toggle output panel|

The shortcuts for toggling specific panels overwrites the default browser's tab selection shortcut, but this can be changed to include <kbd>alt</kbd> as a modifier key by opening the keyboard shortcuts (<kbd>ctrl</kbd>+<kbd>?</kbd>) and checking the box:

![disable cmd+n](/images/disable-cmd-n.png)

## With Sublime keybindings

|Shortcut|Action|
|---|---|
|<kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>up</kbd>|Move current line, up one line|
|<kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>down</kbd>|Move current line, down one line|
|<kbd>ctrl</kbd>+<kbd>d</kbd>|Highlight and place multiple cursor on matching words|
|<kbd>esc</kbd>|Return to single cursor|
|<kbd>cmd</kbd>+ click|Place multiple cursor at click point|
