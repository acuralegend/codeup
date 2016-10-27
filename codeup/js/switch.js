/**
 * Created by acuralegend on 10/6/16.
 */
/** var totalInDollars = 100;
var currency = "EUR";
var total;

if (currency == 'MXN') {
    total = totalInDollars * 19.26;
} else if (currency == "CNY") {
    total = totalInDollars * 1.5;
} else if (currency=="EUR") {
    total = totalInDollars * 1.11;
}
console.log(total);


//switch
switch (currency){
    case "MXN": {
        total = totalInDollars * 19.26
        break;
    }
    case "CNY": {
        totalInDollars * 1.5;
        break;
    }
    case "EUR": {
        total = totalInDollars * 1.11;
        break;
    }
    default:
        total = totalInDollars;
}
console.log(total);

                                    */

/* Lucky Number
var luckyNumber = Math.floor(Math.random()* 6)
var receipt = 60;
var amountWithDiscount;

switch(luckyNumber) {
        case 0:
            amountWithDiscount = receipt;
            break;
                case 1:
                amountWithDiscount = receipt * .9;
                break;
                    case 2:
                        amountWithDiscount = receipt * .75;
                        break;
                            case 3:
                                amountWithDiscount = receipt * .6; //40%
                                break;
                                    case 4:
                                                amountWithDiscount = receipt * .5;
                                            break;
                                                case 5:
                                                    amountWithDiscount = 0;
                                                        break;
}

console.log("You got number " + luckyNumber + " your recieipt was for " + receipt + ". Your discount will be " +amountWithDiscount);

*/


/* MonthNumber */
var monthNumber = Math.floor(Math.random() *12) +1;
var monthName;

switch(monthNumber) {
    case 0:
        monthName = "January";
        break;
    case 1: //monthNumber
        monthName = "February";
        break;
    case 2:
        monthName = "March";
        break;
    case 3:
        monthName = "April";
        break;
    case 4:
        monthName = "May";
        break;
    case 5:
        monthName = "June";
        break;
    case 6:
        monthName = "July";
        break;
    case 7:
        monthName = "August";
        break;
    case 8:
        monthName = "September";
        break;
    case 9:
        monthName = "October";
        break;
    case 10:
        monthName = "November";
        break;
    case 11:
        monthName = "December";
        break;
}
console.log("Yay")
