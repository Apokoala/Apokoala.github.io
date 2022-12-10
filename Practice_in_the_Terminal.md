# The Command Line

> Command lines are text based interfaces for the OS

> Command lines are entered into terminals and within that is the shell. The shell will determine how the terminal will behave and looks after running and executing commands for you.

# Basic Navigation

> basic movement in the shell is done via cd and looking where you are inovles ~ls~ with various options afterwards. typically I always use ls -la.

>Paths can be absolute or relative. This means you can describe where the target file is based off the point of origin within the file structure or you can describe where it is from the beginning of the filepath.

# More about files:

>everything is a file

>linux is an extensionless system. filetypes are determined by looking inside the file.

>spaces in linux names complicate issues because spaces are how we seperate commands in linux...remember to use quotes if the file has a space in it. But better yet...avoid spaces.

> as mentions before i use ls -la in order to see all the hidden files and the original files as a list. just a personal preference

# Manual pages

>this part is actually neat and new

Useful commands:

>man <command>
>man -k <search term>
> /<term> this is within a manual page
> n     toggle through search returns

# File Manipulation

>mkdir and rmdir are familiar as are touch

> copy
>cp[options]<source><destination>

>mv
>mv is the same thing as copy but with mv where cp was
>mv can also be used to rename files

>mkdir

Make Directory - ie. Create a directory.
rmdir
Remove Directory - ie. Delete a directory.
touch
Create a blank file.
cp
Copy - ie. Copy a file or directory.
mv
Move - ie. Move a file or directory (can also be used to rename).
rm
Remove - ie. Delete a file.


# cheat Sheet
> https://ryanstutorials.net/linuxtutorial/cheatsheet.php