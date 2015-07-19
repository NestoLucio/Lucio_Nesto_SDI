/**
 Nesto Lucio
 Section 00
7-18-2015
while Loops - Homework
 */

//alert("testing");

//create saving calculator using while looping.

var  userSavings = prompt("put the amount of money you;d like to save up for 90 days.");
//validate variable.
if ((isNaN(userSavings) || userSavings==="")){
 userSavings = prompt("You can save your words but today we'll save some money\nPlease insert numeric variables only.");
}
userSavings=Number(userSavings);

var daysToSave = 90;
var total =0;
 while (daysToSave >= 0){
 daysToSave--;
  total+=userSavings;
 }
console.log("Your total is $" + total);




