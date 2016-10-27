/**
 * Created by acuralegend on 10/11/16.
 */


function getNumericGrade() {
    var grade = parseInt(prompt("Please input your grade. "))

    while (isNaN(grade) || (grade < 0 || grade > 100)) {

        grade = parseInt(prompt("Please input your grade as a number"));
        console.log(grade);
        console.log(typeof grade);
    }
    return grade;
}

function average3Grades () {
    var total = 0;
    var grade = 0;
    for (var i = 0; i < 3; i++){
        grade = parseInt(prompt("Please inout your grade. "));
    while (isNaN(grade) || (grade < 0 || grade > 100)) {
        grade = parseInt(prompt("Please input your grade as a number"));
    }
    total = total + grade;
}
return total / 3;
}
console.log(average3Grades());

    if(average3Grades() >= 80) {
        console.log("You're awesome!");
    } else {
        console.log("You need more practice");
    }
function genericGradesAverage(){
    var total = 0;
    var counter = 0;
    var addAnotherGrade;
    var average;
    do {
        total += getNumericGrade();
        addAnotherGrade = confirm("Do you want to add another grade?");
        counter++;
    } while (addAnotherGrade);
    average = total / counter;
    return average;
}

var finalGrade = genericGradesAverage();
if(finalGrade >= 80) {
    alert("You are awesome!");
} else {
    alert("You need some more practice.");
}


