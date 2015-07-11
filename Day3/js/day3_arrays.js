/**
Nesto Lucio
 Section 00
 7-11-15
 Arrays
 */


//alert("connection established");

//Create a basic array.
//Picking Oranges.

var orangeBins =[30, 500, 1002];

//How many Oranges did we pick?
var totalOranges = orangeBins[0] + orangeBins[1] + orangeBins[2];
console.log (totalOranges+" Oranges were picked in three days.");

//Average number of Oranges picked
var averageOranges = totalOranges / orangeBins.length;

//Lenghth property of arrays.
console.log(orangeBins.length)

console.log ("The average number of Oranges picked is "+ averageOranges);