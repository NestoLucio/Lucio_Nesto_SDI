/**
 Nesto Lucio
 Section 00
7-21-15
 Zombies
 */

//alert("testing");

//We have 1 zombie here at Full Sail
//it can bite 4 people a day and turn them into Zombies in 24 hours.

//The CDC wants to know how many Zombies there will be in 8 days.

//Create the givens.
    //How many zombies we have.

var numZombies = 1;
//Number of people a zombie have per day.
var numBites = 4;

//What is the time line.
var days=8;
/*
for (var i=1; i<=days; i++){
 //How many people get infected every day
 var infectedPeople = numZombies*numBites;
 //How many Zombies will we have.
 numZombies+=infectedPeople;
 console.log("On day number "+i+" there will be "+numZombies+ " Zombies!")

}
*/

//The CDC wants to know how many days it will take would it take for there to be a million zombies.

//variable to count the number of days.
var numDays = 1;

while(numZombies<=100000){
 //How many people get infected every day
 var infectedPeople = numZombies*numBites;
 //How many Zombies will we have.
 numZombies+=infectedPeople;
 //Report out each day
 console.log("On day number "+numDays+" there will be "+numZombies+ " Zombies!")
//increase
 numDays++;
}
console.log("It will take "+ (numDays-1) + " days for a million zombies");