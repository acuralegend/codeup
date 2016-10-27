"use strict";

var myNameIs = 'Herb';

// TODO: Fill in your name here.


function sayHello(name) {

    console.log("Hello " + name);
}
// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.

sayHello(myNameIs);
sayHello("Jeff");

// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
// When called, the function should log a message that says hello from the passed in name.



// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random
var random = Math.floor((Math.random()*100)+1);

// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.

function isOdd(number) {
    if number % 2 != 0 {
        console.log(number + " is odd");
        return true
    :
    } else {
        console.log(number + " is even");
        false;
    }
}
console.log(random);
console.log(isOdd(random));
console.log(isOdd(5));
console.log(isOdd(2));

// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.
