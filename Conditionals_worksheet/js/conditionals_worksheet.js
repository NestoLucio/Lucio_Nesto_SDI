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

var gas = 45;
var gaugeReading = 90;
var tankCapacity = 80;
var currentGasGallons = 75;

console.log("The car has a " + gas + "MPG efficiency, currently the gas gauge reading is at " + gaugeReading + "%. The car can hold up to " + tankCapacity + "Gallons of Gas.");

//Should we stop for gas?

if (gas + gaugeReading >= 200){
 console.log("Yes, you can make the trip, No need to stop for gas!");
} else {
console.log("You better get some gas or you'll be stranded.");
}



/**
GRADE LETTER CALCULATOR.
A student earns a number grade at the conclusion of a course at Full Sail. Determine the appropriate
 letter grade for that number using conditional statements.
Assume grades are whole numbers that never go below 0 or above 100.
Use the FullSail Grade scale.
There should be only one print out to the console.

 */

//Student grades.

var week1Grade = 90;
var week2Grade = 90;
var week3Grade = 50;
var week4Grade = 90;

var gradeAverage = ((week1Grade + week2Grade + week3Grade + week4Grade) / 4);
console.log ("Total grade average is " + gradeAverage +"%.")
//

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
var movieTime = 4;
var movieTicket = 12;
var discount = 7;

//Customer Details.
var ageOfCostumerKid = 9;
var ageOfCostumerSenior = 55;

//IF

if (ageOfCostumerKid <= 10){
 console.log("The ticket price is $" +  (movieTicket - discount));

} else {
 console.log("The ticket price is $" +  movieTicket);
}
