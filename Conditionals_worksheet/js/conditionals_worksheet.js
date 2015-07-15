/**
 Nesto Lucio
 Section 00
7-14-15
 Conditionals_worksheet
 */

//alert("testing Conditionals_worksheet js");


//LAST CHANCE FOR GAS.
//A driver has to determine if they can make it across the desert with their current fuel.
// They are about to past the last gas station for the next 200 miles
// and they need to determine whether they should stop now for gas or not.

var gas = 20;
var gaugeReading = 50;
var tankCapacity = 30;
//var currentGasGallons = 75;

var gasReading = gaugeReading /100;
var gasLeft = tankCapacity * gasReading;

var howFar = gasLeft * gas;

var distance = 200;

//is the distance I CAN travel (howFar) greater than or equal to the distance I NEED to travel (distance)

if (howFar >= distance){
 console.log("You can make the trip without stopping for gas!");
} else{
console.log("You only have " + gasLeft +" Gallons left, better stop for gas.");
}


//
//GRADE LETTER CALCULATOR.
//Student grades.

var week1Grade = 90;
var week2Grade = 90;
var week3Grade = 50;
var week4Grade = 90;

var gradeAverage = ((week1Grade + week2Grade + week3Grade + week4Grade) / 4);

console.log("Total grade average is " + gradeAverage +"%.");

if (gradeAverage >= 90){
console.log("you have a " + gradeAverage + "%, which means you have earned a A in the class.")
} else {
 console.log("you have a " + gradeAverage + "%, which means you have earned a B in the class.");
}

/**
 *MOVIE TICKET PRICE
 *The local movie theater in town has a ticket price of $12.00 but if you are a senior (55 and older), under 10 you get the discounted price of $7.00. In addition, if a customer is seeing a movie between 3pm and 5pm they can also get the discounted price.
 Determine which of the two prices the customer is eligible for.
 */

//Movie details
var movieTime = 2;
var movieTicket = 12;
var discount = 7;

//Customer age Details.
var customerAge = 14;

//IF

if (customerAge >= 55 || customerAge <=10){
 console.log("Movie ticket is $" + (movieTicket - discount));
} else if (movieTime <= 5 && movieTime >=3){
 console.log("Movie ticket is $" + (movieTicket - discount));
} else {
 console.log("Movie Ticket is $" + movieTicket);
}
