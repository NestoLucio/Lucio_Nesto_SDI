/**
 Nesto Lucio
 Section 00
 7-23-2015
Arguments and Parameters
 */

//alert("testing");

//Arguments - Goes in the function call and these are the specific values.
//Parameters - Goes in the function definition and these catch the arguments. "Generic Containers"

//Create variable for width and height.
var width = 10;
var height = 20;



//Create a function to calculate the area of a rectangle.

function calcArea(){
        //Create variables
        //width = 10;
        //height = 20;
        //Calculate the area
        var area = width * height;

        //Console log the area.
        console.log("The area of a rectangle with a width of "+ width + " and a height of "+ height + " is " +area);
}

//Lets call the function
calcArea();
//Change the variable
width=50;
height=10;
calcArea();