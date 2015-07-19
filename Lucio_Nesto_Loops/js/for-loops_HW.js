/*
 Nesto Lucio
 Section 00
7-18-2015
 Loops homework Assignment
 */

//Create savings of calculator

var userDailySavings = prompt("Select dollar amount per day to put into savings so that you can reach the goal of $1000");
//validation here
if (isNaN(userDailySavings) || userDailySavings===""){
 //prompt user to only use numbers
 userDailySavings = prompt("Please use only numbers");
}
userDailySavings = Number(userDailySavings);
for( counter=userDailySavings; counter > 0 ; counter += userDailySavings) {
console.log("Your current saving is $" + counter);
 if (counter>=1000){
  //break once user reaches goal os $1000
  break;
 }
}
console.log("you have reached your goal!");







