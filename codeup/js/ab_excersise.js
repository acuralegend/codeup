/**
 * Created by acuralegend on 10/10/16.
 */



function add(a, b) {
        return a + b;
}

function subtract(a,b) {
            return a - b;
}

function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    return a / b;
}

console.log("The result of adding 1 and 1 is " + add(1,1));
console.log("2 minus 1 is " + subtract(2,1));
console.log(square(5));


function square(number) {
    return multiply(number, number);
}

function sumOfSquares(a, b) {
    return add(square(a), square(b));

}
