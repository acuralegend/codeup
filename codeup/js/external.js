/**
 * Created by acuralegend on 10/6/16.
 */


"use strict";
var condition = true;
var name = "Bill";
var lastName = "Madison";
var message;

if(name == "Bill") {
                console.log("Hello Mr. " +lastName)
}

var number = 15;
if(number % 5 == 0) {
                        message = "divisible by five";
} else {
        message = "NOT evenly divisible by five";
}
console.log(message);
message = (number %5 == 0) ? "divisible by five" : "NOT";
console.log(message);
