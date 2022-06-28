# Programming with JavaScript

Control structures include conditionals like loops and functions and events.

Its important when coding with JS (and im assuming other languages) that you pay attention to the control flow, which is not only taking into account that the script must be read from start to finish but also how functions affect order of execution.

## Expressions and operators

Oh sweet baby jesus...there is a lot in here. Expressions and operators which include:
 Assignment
 Comparison
 Arithmetic
 Bitwise
 Logical
 String
 Conditional
 Comma
 Unary
 Relational

 More information on this can be found ![here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

 So lets talk about operators and operands

 operands are the things affected by the operator. For instance
 ```
 operand1 operator operand2
 ```
 this would look like ```3+4``` or ```x*y```.

## Functions

A fundamental building block in JavaScript. A function is a procedure. A set of statements tht performs a task or calculates a value. But for that procedure to be a function it should take in an input and return an output.

a good example is:
```
function square(number) {
    return number * number;
}
```
An important part of the function is that the body of a function assigns completely new values so that **the change is not reflected globally or in the code which called that function**

Functions are defined but that does not execute it. Functions must be called.

Calling the function actually performs the specified actions. 