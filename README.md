[![Apokoala-github-io.png](https://i.postimg.cc/7h9LkMgX/Apokoala-github-io.png)](https://postimg.cc/fS3s7dq0)

## Growth Mindset

Hello Everyone! My name is Michael Gazaway, but "Gaz" seems to have been my name for as long as I can remember. I live in Evans, Georgia and I am about to turn 38 years old in July =/. I actually started in IT when I was in college, then I ended up in the Marines. Spent the better part of two decades in iraq and afghanistan. Now I work for the NSA as a dataflow engineer: I take in data from the service elements (USMC, ARMY, AF, NAVY, ETC) and a rectify it and transport it within the Agency for use in various repos. This is more system's engineering and doodling (nifi is a JVE environment that visualizes data so you literally draw the dataflow and then that dataflow actually exists) than not. I have dealt with some expression languages within other programs like NiFi or SQL. I'm hoping to be able to use this training to take a step forward within the IC and actually contribute to building some of the community tools and widgets that we use AND learn how to create tools, portals, etc that can help where I am currently.

Here is a list of my daily learnings and experiences in this course

## Table of contents (102 Code Fellows):

Day1[here](https://apokoala.github.io/reading-notes/day1)<br/>
Day2[here](https://apokoala.github.io/reading-notes/day2)<br/>
Day3[here](https://apokoala.github.io/reading-notes/day3)<br/>
Day4[here](https://apokoala.github.io/reading-notes/day4)<br/>
Day5[here](https://apokoala.github.io/reading-notes/day5)<br/>
Day6[here](https://apokoala.github.io/reading-notes/day6)<br/>
Day7[here](https://apokoala.github.io/reading-notes/day7)<br/>
Day8[here](https://apokoala.github.io/reading-notes/day8)<br/>

## Table of contents (201 Code Fellows):

Day1[here](https://apokoala.github.io/reading-notes/201_day1)<br/>
Day2[here](https://apokoala.github.io/reading-notes/201_day2)<br/>
Day3[here](https://apokoala.github.io/reading-notes/201_day3)<br/>
Day4[here](https://apokoala.github.io/reading-notes/201_day4)<br/>
Day5[here](https://apokoala.github.io/reading-notes/201_day5)<br/>
Day6[here](https://apokoala.github.io/reading-notes/201_day6)<br/>
Day7[here](https://apokoala.github.io/reading-notes/201_day7)<br/>
Day8[here](https://apokoala.github.io/reading-notes/201_day8)<br/>
Day9[here](https://apokoala.github.io/reading-notes/201_day9)<br/>
Day10[here](https://apokoala.github.io/reading-notes/201_day10)<br/>
Day11[here](https://apokoala.github.io/reading-notes/201_day11)<br/>
Day12[here](https://apokoala.github.io/reading-notes/201_day12)<br/>
Day13[here](https://apokoala.github.io/reading-notes/201_day13)<br/>
Day14[here](https://apokoala.github.io/reading-notes/201_day14)<br/>
Day15[here](https://apokoala.github.io/reading-notes/201_day15)<br/>



What I learned about the growth mindset is that it requires effort. It seems that the dichotomy of a "growth" mindset is a juxtaposition of what is natural: "a fixed mindset." For instance, I find myself guilty of several of the tendencies of the fixed mindset...actually, all of them.

I know it's cheesy but I think I might get some sort of doo-dad that has "growth mindset" on it...maybe they have rubber ducks that have them embossed on them. Or maybe I'll include some of the aspects of it in a mantra or something similar.

__edit__: I couldn't find one but i could find Captain Quack Sparrow
![Captain Quack Sparrow](https://m.media-amazon.com/images/I/61MbPW--ONL._AC_SX466_.jpg)

He is already in the cart.

## Learning Markdown

So the most important thing I learned so far in markdown is "quoting code" ...this is super important because...__DOUBLE CLICKING IT ALLOWS YOU TO SELECT ALL THE CODE__...also there is a copy button to the right... ...essential for copy-pasta.

This is done by using the the 'strike' which is the primary to the tilde~~ to the left of the one on your keyboard: ```

```
When used it looks like this!
```
Which is pretty cool.
Something similar is blocktext:
> which
> looks like
> this

 We can also do things like;
~~strikethrough~~ using double tildes at the lead and follow of a statement, **bold** using double lead and follow asterix, and __italic__ using underscores!

More information about syntax is available [here](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

## Command Line

>Jesus Christ it's Jason Bourne...again shell, or Bash
>you can find out which shell you are using by using the command:
>user@xxxx: echo $SHELL

### Where are you:
>user@bash: pwd
This stand for Print Working Directory and will tell you where you are.

### What is here:
>user@bash: ls
This stands for List and will list the contents of the directory you are in.
>ls//option//location is the structure for this command

### Absolute and relative paths:
You can give pathing relative to the root directory or relative to where you are within the subdirectories. 

### More on paths:
>~(Tilde) this is a shortcut for your home direcotory
>.(dot) this is your current directory
>.. (dot dot) this is your parent directory (the directory containing the one you're in)

### Moving around:
cd allows you to move around, dot dot for parent directory or you can list a subdirectory of the directory you are in. You can use tab to complete a sub-directory listing as long as what you've entered is unique.

### Moving around with quotes
Quotes allow you to move to a directory if you know its absolute name

>user@bash: cd 'farfignuten'
>user@bash: pwd
>/home/gaz/docs/whatisthisfor/farfignuten

A trick here to nullify spaces in order for them to not be a command is the BACK SLASH

>user@bash: cd farfignuten\ socks
>user@bash: pwd
>/home/gaz/docs/whatisthisfor/farfignuten socks

## More information on linux commands can be found [here](https://ryanstutorials.net/linuxtutorial/filemanipulation.php)


## Very interesting stuff on GIT
[Git](https://blog.udemy.com/git-tutorial-a-comprehensive-guide/)

### Getting started

First switch to your target directory using
> cd test
Then initial 'init' using the git init command
>$ git init

Now you are going to start tracking this repo by __BEING WITHIN THE DIRECTORY OF THE REPOSITORY__
>$ git add .c
>$ git add LICENSE
>$ git commit -m "message"

You can also clone an existing Git repo
>$ git clone https://github.com/test

### Checking File Status
>$ git status

### Pushing Changes
>$ git push origin master

## Wireframe and Design

In order to make good HTML wireframes you have to conform to three principles:

>maintain clarity
>gain user confidence
>simplicity is key

Create research --> User flow

Wireframing within the user flow contains the structure of your entire site and should be focused on the user experience as well as the functionality you are trying to provide. While wireframing is important it's best to add some details to your wireframes and start testing.

## HTML Basics

What is HTML: A markup language that defines the structure of your content.

These consist of **elements** which act as containers for different parts of your content to make it look or act a certain way. 

Each element consists of an __opening tag__ and a __closing tag__ with the content between them. The entirety of which is the **element**

Attributes can be contained within the tag. These contain information about the element that you dont want to appear in the actual content.

You may nest elements.

Empty elements: these dont wrap content rather they embed so there is no need to include a closing tag

## Headings

><h1>My main title</h1>

headings run through 6 levels but you are only likely to use 3 or 4 at most.

## Comments

><!--> comment comment comment -->
This is an html comment. The browswer will ignore it as it is rendering the code.