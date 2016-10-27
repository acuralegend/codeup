//* Created by acuralegend on 10/6/16. /

/** Averages */

var Score1 = 70;
var Score2 = 80;
var Score3 = 95;
var avg=(Score1+Score2+Score3)/3;
var message;

if (avg > 80) {
    message = "You're awesome";
} else {
    message = "You need to practice more";
}
console.log(message)


/** HEB */

var Name1 = "Cameron";
var Name2 = "Ryan";
var Name3 = "George";
var Total1 = 180;
var Total2 = 250;
var Total3 = 320;
var minimumAmount = 200;
var discount = .8;
var message, discountAmount;

// Check To see if discount can be applied /
if (Total1 > minimumAmount){
    discount = Total1 * discount;
}else {
    discountAmount = Total1 * discount;

}

if(Total1 > 200) {
    message = 'Yes ' + Name1 + " gets a discount";

} else {        message = 'No ' + Name1 + " does not get a discount";
}
console.log(message);

if(Total2 > 200) {
    message = 'Yes ' + Name2 + " gets a discount";

} else {        message = 'No ' + Name2 + " does not get a discount";
}
console.log(message);


if(Total3 > 200) {
    message = 'Yes ' + Name3 + " gets a discount";

} else {        message = 'No ' + Name3 + " does not get a discount";
}
console.log(message);


// CoinFlip

var flipCoin = Math.floor(Math.random()* 2);
var message = "Buy a house";

if (1 == flipCoin){
    message = "Buy a Car!";
}

console.log(message);
