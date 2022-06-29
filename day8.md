# Expressions and operators

## Comparison Operators

A comparison operator compares its operands and returns a logical value based on whether the comparison is true.

So the point of this seems to be to return true based off operators

```
Equal (==)
Not equal (!=)
Greater than (>)
Greater than or equal(>=)
Less than (<)
Less than or equal (<=)
```

## Assignment operators

So this assigns an operator a value to the left of the operand (typically an equals or flavor thereof) the value of the right operand. It appears this is a lot like math and assigning the value of a variable. 

[More info on actual syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment_operators)

## Loops and Iteration

This allows you to do something repeatedly.

So for this they give us the example of this code:

```
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking east one step');
}
```

So in this i believe you're assigning step to equal zero, then while step is less than five, on each iteration you add (syntax ++) 1 to step and then run through the loop again.

### for loops

syntax 
```
for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement
```
more information is [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)