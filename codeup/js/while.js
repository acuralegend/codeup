/**
 * Created by acuralegend on 10/7/16.
 */


// Counter
// Accumulator

    // are we done yet?
var i = 1; //counter
while(/* condition, return true */ i < 21 ) { //start of a block
    console.log(i);
    i +=2; //increment

} //end of block

console.log("We're done");



var targetAmount = 100;
var amountSaved = 0; //accumulator
var j = 0;

while(amountSaved < targetAmount) {
    amountSaved += Math.floor(Math.random() * 10) + 1;
    j++;
}
console.log("I saved " + amountSaved);
