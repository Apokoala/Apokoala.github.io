# basic recursion

Recursion is a technique in which a function calls itself. This allows the function to repeat itself until it reaches a base case, which is a condition that causes the function to stop calling itself.

Here is an example of a recursive function that calculates the factorial of a number:

```
function factorial(n) {
  // If n is less than or equal to 1, return 1
  if (n <= 1) {
    return 1;
  }
  
  // Otherwise, return n multiplied by the factorial of n - 1
  return n * factorial(n - 1);
}
```

In the code above, the factorial function calculates the factorial of a number n by calling itself with the argument n - 1. This continues until n is less than or equal to 1, at which point the function returns 1 and the recursion stops.

For example, the factorial of 5 can be calculated as follows:

```
factorial(5)
  => 5 * factorial(4)
    => 4 * factorial(3)
      => 3 * factorial(2)
        => 2 * factorial(1)
          => 1

```
The factorial of 5 is 120, so calling factorial(5) would return 120.

Recursion is useful for solving problems that can be divided into smaller sub-problems of the same type, such as calculating a factorial or traversing a tree data structure. It can also make code more elegant and concise, as in the example above. However, it is important to carefully consider the base case and make sure that the recursion will eventually terminate, otherwise the function will continue to call itself indefinitely and cause a stack overflow error.

# Data Structures

A data structure is a way of organizing and storing data in a computer so that it can be accessed and modified efficiently. Examples of data structures include arrays, linked lists, stacks, queues, trees, and graphs. Data structures are used to implement data types, such as strings, integers, and complex objects, and they provide efficient algorithms for inserting, deleting, and searching for data. Data structures are essential for many algorithms and computer programs, and they play a key role in the performance and scalability of software systems.

> linked list
    > made of a node and a pointer
    node is known as a head...last one without pointer is tail

    this is not good at retrieving because its only familiar with whats next to it

> array
    >this is very good for retrieval
    > arrays could have memory issues

>Hash table
    > object in JS
    > memory function will put data in a specific place
    > collisions are possible

>stack and queue
    > built on arrays
    > stack is last in first out
        >push and pop
    
    > queue
        > FIrst in first out

>Graph Theory
    > edges


> Why Big O

One of the most important things to consider when choosing a data structure is the operations that will be performed on the data. Different data structures are optimized for different operations, so it is important to choose a data structure that can efficiently support the operations that are required by the problem you are trying to solve. For example, if you need to frequently search for elements in a large collection of data, a hash table or binary search tree would be a good choice because these data structures provide efficient search algorithms. On the other hand, if you need to insert and delete elements in a dynamic collection of data, a linked list or dynamic array would be a better choice because these data structures support efficient insertion and deletion. By carefully considering the operations that will be performed on the data, you can choose a data structure that will provide the best performance and scalability for your problem.





