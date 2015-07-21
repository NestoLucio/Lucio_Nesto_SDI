/**
 Nesto Lucio
 Section 00
 7-21-2015
Do Loops
 */

//alert("testing");

//calculate a trip by using user average MPH and miles to travel to give estimated travel time.

//alert("This could be dangerous and would not recommend traveling at high speeds.\nWhat speed do you need to travel to get anywhere over 1000 miles in less than 10 hours (land)");
//prompt user to insert average MPH.
var averageSpeed = prompt("Please insert the average MPH you will be traveling.");
//If user uses alphabetic characters prompt user to only use numeric, loop until user applies.
while ((isNaN(averageSpeed) || averageSpeed==="")){
  averageSpeed = prompt("Please only put numeric characters.");
 }
// console.log("You will be traveling at " + averageSpeed + "MPH");

//prompt user to insert miles to travel.
//if user does not insert numeric characters, validate with loop until user applies.
var milesToTravel = prompt("How many miles will you be traveling?");
 while ((isNaN(milesToTravel) || milesToTravel==="")){
  milesToTravel = prompt("Please enter distance over 1000 miles" + " and only in numeric numbers.");
 }
console.log("You will be traveling "+ milesToTravel + " miles at a rate of "+ averageSpeed + "MPH.");


//make the trip in less than 10 hour

var travelTime = (milesToTravel/averageSpeed);
//console.log(travelTime);

do {
milesToTravel / averageSpeed;
}while (travelTime < 10);





//var averageSpeed is tested - commented console.log out after test.
//var milesToTravel is tested - commented console.log out after test.