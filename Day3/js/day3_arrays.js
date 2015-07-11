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

//Create an array of avengers.
var theAvengers =["Iron-Man", "Captain America", "Hawkeye","Hulk"]

//Print out whole array.

console.log(theAvengers);

//access a specific item in the array.
console.log(theAvengers[1]);

//Use a variable as an index number.
var num =2;
console.log(theAvengers[num])

//Set a specific item.
theAvengers[3]= "thor";

console.log(theAvengers);

//Add a new item in our array.
theAvengers[4] = "Falcon";
console.log(theAvengers);

//Add a new item...again.

theAvengers [theAvengers.length] = "Black Widow";
console.log(theAvengers)

//Create new array for fruits

var fruitArray=["Banana", "Pear", "Peach", "strawberry"];
console.log(fruitArray);

//Push - method or a function or arrays.
//Push adds it to the end of the array.

fruitArray.push("Pineapple");
console.log(fruitArray);
console.log(fruitArray[4]);

fruitArray.push("Date");
console.log(fruitArray);

//Pop method - removes the last item in the array AND returns it.
var caught = fruitArray.pop();
console.log(fruitArray);
console.log(caught);

//Splice - use for adding and removing items in a array.
//Splice  (position, # of items to remove, items to put in.)

fruitArray.splice(0, 0, "Lemon",  "Cherry");
console.log(fruitArray);