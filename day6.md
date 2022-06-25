# Javascript

>JavaScript (JS) is single-thread
>supports object oriented, imperative, and declarative styles.
>Do not confuse Java and JavaScript; their syntax, semantics, and use are very different.

## Layer Cake

### First layer
>HTML: gives menaing to the content, for example paragraphs, heatdings tables and images.

### Second layer
>CSS: this styles the web page.

### Third layer
>JavaScript (JS): create dynamically updating content, control multimedia, animations, etc.

each page has its own seperate bucket for running code in called execution environments
Javascript uses just-in-time compiling which improves performance; it is compiled into a faster binary format while the script is being used. It is still considered an interpreted language, however, as its handled at run time.


```
document.addEventListener('DOMContentLoaded', () => {
  function createParagraph() {
    const para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
  }

  const buttons = document.querySelectorAll('button');

  for (const button of buttons) {
    button.addEventListener('click', createParagraph);
  }
});
```