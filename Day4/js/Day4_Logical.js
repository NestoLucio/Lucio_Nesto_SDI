/**
 Nesto Lucio
 Section 00
 Date
 Topic
 */

//alert("testing");

//Check the price of an item. Scooter.

var scooterCost = 1000;
var budget = 800;
var paycheck = 500;

//If the price of the scooter is less than our budget than we can buy it.
//And if our pay check is over 400;

if (scooterCost<budget){
 console.log("We can buy the scooter");
} else {
 console.log("The cost is too high for our budget.");
}

if (paycheck>400){
 console.log("We can buy the scooter.");
} else {
 console.log("Our paycheck is too small to buy our scooter.");
}

//Use the AND logical operator to test both conditions at one time.

if (scooterCost<budget && paycheck>400){
 console.log("Both the scooter is in budget and our paycheck is height enough.");
} else {
 console.log("sorry you cannot but the scooter.");
}

//Or Logical Operator.
//Either one must be true in order to be TRUE.

//If the scooter is less than or equal to our budget OR if we won the lottery.
//then we can buy the scooter.

var wonLotto = false;

if (scooterCost <= budget || wonLotto){
 console.log("You have enough money to buy the scooter or you won the lottery.")
} else {
 console.log("Sorry, no scooter for you.");
}
