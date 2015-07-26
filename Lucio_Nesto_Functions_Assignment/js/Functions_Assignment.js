/**
 Nesto Lucio
 Section 00
07-25-2015
functions
 */

//alert("testing");

//Idea.......
//Idea.....
//How to fins the area of a Trapezoid.


//Create prompt variables


var userHeight = parseInt(prompt ("Let's find out the area of your Trapezoid\nPlease put in the height of your trapezoid"));
//Validate the user prompt for height.
while(isNaN(userHeight) || userHeight ==="") {
       //re-prompt user
       userHeight = prompt("Please only use numbers and don't leave blank.\n please type in number. What is the height of your trapezoid");
}
//Test vaiable
console.log("The height of your trapezoid is " + userHeight);

//Base 1 variable
var userBase1 = parseInt(prompt ("Please put in the base 1 of your trapezoid"));
//Validate the user prompt for height.

//Validate user base 1
while(isNaN(userBase1) || userBase1 ==="") {
       //re-prompt user
       userBase1 = prompt("please type in number. What is the base 1 of your trapezoid");
}
//Test vaiable
console.log("The first base of your trapezoid is " + userBase1);

//Base 2 variable
var userBase2 = parseInt(prompt ("Please put in the base 2 of your trapezoid"));
//Validate the user prompt for height.

//Validate user base 1
while(isNaN(userBase2) || userBase2 ==="") {
       //re-prompt user
       userBase2 = prompt("please type in number. What is the base 2 of your trapezoid");
}
//Test vaiable
console.log("The second base of your trapezoid is " + userBase2);









//Create Function to calculate the area of the trapezoid.
function calcArea (b1, b2, h){
        var area = ((b1+b2)/2)*h;
        return area
}

var totalArea = calcArea(userBase1,userBase2,userHeight);
console.log(totalArea);




///TEST
//Tested variable userHeight and validated it.
//Tested and validated base user prompts
//Function for calcArea is returning and validated








