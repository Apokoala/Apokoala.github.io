# CSS (Cascading Style Sheets)

> there are resets and normalization tools.
> user agent styles refer to the browser and they have defaults for displaying pages.
> HTML is a markup language, other languages include SVG and XML

>CSS is rule based, you apply each rule to each element or groups of elements based off nesting

```
h1 {
    color: red;
    font-size: 5px;
}
```
In the previous this would take the element h1 and apply the rules red and the font size of 5 pixels. 

h1 in the previous is referred to as the selector. Use the selector to reference the part of your html that you would like to apply a rule to. 

CSS has a list of specs that are developed by a group called the CSS Working Group.

## CSS Structure

CSS is typically contained in the different file wiht a .css extention.

It is worth noting that a CSS style sheet can be linked to multiple web pages.

You link the sheet to your html through a line of html code:

```
<link rel="stylesheet" href="style.css">
```

You can also place style elements within the same document with your html using a style child:

```
<style>
h1{
    *rules*
}
</style>
```
