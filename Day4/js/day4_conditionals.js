/**
 Nesto Lucio
 Section 00
 7/14/15
 Conditionals
 */

//alert("Day 4 Conditionals");

//Basic Conditional IF statement.
// if (Condition to test) {Code to run if true}

//Create a boolean variable.
var oldEnough = true;

//If the child is old enough tell him he can ride the coaster.
//Else{} this wil run if the IF statement does not run.

if (oldEnough) {
  //Code inside of the {} will run if old enough is a boolean of true.
 console.log("You can ride the coaster!");
}

else {
 //This code will run if the IF block does not run.
 //if old enough evaluate to a boolean of false.
 console.log("Sorry, you are too young to ride.");

}

//Relational Expressions - Operators
//Test the kids height to see if he can ride the ride.
var kidHeight = prompt("How tall are you in inches?");

var sneakerLift = 2;

//If the child is 48 or taller the can ride the ride.

if (kidHeight>=48){
 //Code inside of here will run if child is 48 or taller.
 console.log("Congrats you are tall enough to ride the coaster");
} else if (Number(kidHeight)+sneakerLift >= 48){
 //This code will run if the child is tall enough while wearing sneakers.
 console.log("You are tall enough to ride a coaster if you wear your sneakers!");

} else {
 console.log("Sorry you are too short to ride the roller coaster.");

}

console.log("This text is after the code block.");


