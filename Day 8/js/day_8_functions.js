/**
 Nesto Lucio
 Section 00
07-23-2015
Functions
 */

calcArea();
//alert("testing");

//Basic Function Structure
// function functionName(){Code to run goes here}

printHello();
//Create a function that will console log something.
function printHello(){
//This code will run when the function run or is called upon
 console.log("This Function is working");

}

//Create a function call that will start our printHello function.
//Call the function by using the name.
printHello();
printMore();
printHello();

//Create a function that console logs a different string.
function printMore (){
 console.log("This is different text");
}

//function call printMore
printMore();

//Create a function that calculates the area of a rectangle.

function calcArea (){
 //Create variables for W,H,A

 var width=20;
 var height=30;
 var area=width*height;
 console.log("The area of the recatangle is " + area + "sq Feet");
}

//Create the function call

calcArea();