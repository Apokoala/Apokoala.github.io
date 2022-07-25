'use strict';
 
//A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.


alert(`hello world`)

//turn it into a function

function Hello() {
    alert('hello world')
}

//now to get it to do anything, you have to call it

Hello();

//functions with parameters

function addTwoNumbers(a,b) {
    return a + b;
    
}

//So you could use this and the parameters (the things within the parenth) to call the function for a series of questions.

function questionPrompt(message, correct1, correct2) {
    let answer = prompt (message).toLowerCase();
    if (answer === correct1|| answer === correct2) {
        alert("Correct! Good Job");
        return;
    }
    alert("Sorry you got this one wrong");
}




