/**
 Nesto Lucio
 Section 00
7-18-2015
 While-Loops homework Assignment
 */


//Create Rent calculator.

//Create variables.
var rent = prompt("Please insert rent amount");
//rent validation.
while(isNaN(rent) || rent ===""){
 rent = ("Please only type in numeric numbers");
}
console.log("Your rent is currently $" + rent);