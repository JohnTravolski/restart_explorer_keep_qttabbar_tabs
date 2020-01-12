# Restart File Explorer and Preserve QTTabBar Tabs

Allows you to restart file explorer while preserving your tabs in QTTabBar. I'm sure there's a better way to do this, but I don't know how to make it better.

To set this up, open up QTTaBbar Options => Command Buttons => + Icon and then set "Type of command" to "File & Folder." Give it the keyboard shortcut "Shift Alt [" and set the "Path" item to the absolute path of "read.js". Click OK.

Then make another one and repeat, but with a shortcut of your choice and the "Path" set to the absolute path of "restart_explorer.js".

Finally, change the line:
`objShell.run('"QTTabBar_Refresher.bat" ' + str);`
in "restart_explorer.js" to the absolute path of the QTTabBar_Referesher.bat file
(such as `objShell.run('"C:\\Users\\John\\QTTabBar_Refresher.bat" ' + str);`)

This requires AutoHotKey to function properly. 
As of now, this has been tested on Windows 10 v1607 Build 14393.
