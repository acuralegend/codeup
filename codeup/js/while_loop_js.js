/**
 * Created by acuralegend on 10/7/16.
 */

 /* Classroom Example

var allCones = Math.floor(Math.random() * 50) + 50;
var cones;
var conesLeft = allCones;

do {
    cones = Math.floor(Math.random() * 5) + 1;
    console.log(cones + " cones sold" );

        if (cones <= conesLeft)  {
        conesLeft -= cones;
    } else  {
        console.log("Cannot sell you " + cones + " cones I only have " +conesLeft + "...");
    }

} while(conesLeft > 0);
console.log("Yay! I sold them all!" );
                                        */

/* MY CODE -- DOESN'T WORK

var targetAmount = 100;
var allCones = Math.floor(Math.random() * 50) + 50;
var conesSold = Math.floor(Math.random() * 5) + 1;
totalCones = allCones;


while (allCones >= 0) {
    (allCones - ConesSold)
}
var amountCones = (allCones - conesSold);

console.log("I have " + amountCones );

                                            */


/* Number generator
var someNumber = 2;
while(someNumber < 65537 ) {
    console.log(someNumber);
    someNumber  *=2;
}

console.log("We're done");
                            */


/*
99 bottles of beer on the wall
99 bottles of beer. Take one down, pass it around.
    98 bottles of beer on the wall...
    ...
    1 bottle of beer on the wall
    no bottles of beer on the wall. somebody should go to the store!

*/

var bottlesOfBeer = 99;
while(bottlesOfBeer > 0) {
        if(bottlesOfBeer == 2) {
            console.log(bottlesOfBeer + " bottles of beer on the wall.");
            console.log(bottlesOfBeer + " bottles of beer!");
            console.log("Take one down and pass it around...");
            console.log(bottlesOfBeer - 1) + "bottle of beer on the wall";
        }else if (bottlesOfBeer == 1) {
            console.log(bottlesOfBeer + " bottle of beer on the wall.");
            console.log(bottlesOfBeer + " bottle of beer!");
            console.log("Take one down and pass it around...");
            console.log("TNo more bottles of beer on the wall");
        }else{
            console.log(bottlesOfBeer + " bottles of beer on the wall.")
            console.log(bottlesOfBeer + "bottles of beer!");
            console.log(bottlesOfBeer - 1) + "bottles of beer.."
        }

}
