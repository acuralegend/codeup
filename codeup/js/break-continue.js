/**
 * Created by acuralegend on 10/10/16.
 */



var luckyNumber;
var customerCount = 0;
while (true ) {
    luckyNumber = Math.floor(Math.random() * 5) + 1;
    if (luckyNumber == 5) {
        break;
    }
    customerCount++;
}

console.log(customerCount);



var i;
    for (i = 0; < 10; i++) {

    receipt = Math.floor(Math.random() * 300);
    if (receipt < 200 ) {
        continue;
    }
    console.log(receipt);
    }
