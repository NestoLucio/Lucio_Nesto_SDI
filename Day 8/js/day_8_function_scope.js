/**
 Nesto Lucio
 Section 00
07-23-2015
 function scope
 */

//alert("testing");

//Variable scope
//Variables that are inside and outside of a function.


//Create a variable called width in our main code
//This variable is scoped outside of the function

var width =5;

//console log it
console.log("Starting width is "+ width);

//Create a variable called changeMe
//This will be scoped to the main code
var changeMe = 7;
console.log("Starting value of changeMe is "+ changeMe);



//Create a function that calculates the perimeter of a rectangle

function calcPeri() {
   //Create variables for width and height and perimeter.
   //try not to re-use variable names
   //but this is going to be impossible for larger files..

   //This variable is scoped to the function calcPeri.

   var width = 10;
   console.log("width inside of function is" + width);
   var height = 20;
   var perimeter = width * 2 + height * 2;

   //Change the value of change me
   changeMe=15;
   console.log("Inside of the function changeME is "+changeMe);



   //console.log the perimeter
   console.log("The perimeter is " + perimeter);
}

console.log("After the functions call, width is " + width);
console.log("After the function call changeME is "+ changeMe);
calcPeri();

//This will not work, Main code cannot see inside of this function.
//console.log("After the function call width is " + width);
//console.log ("The value of height is "+ height)
