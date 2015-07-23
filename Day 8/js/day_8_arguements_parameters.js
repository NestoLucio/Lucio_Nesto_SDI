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

function calcArea(w, h){
        //Create variables
        //width = 10;
        //height = 20;
        //Calculate the area
        var area = w * h;

        //Console log the area.
        console.log("The area of a rectangle with a width of "+ w + " and a height of "+ h + " is " +area);
}

//Lets call the function
calcArea(width,height);

//Find the area width =6 height =7
calcArea(6,7);

//Let's ask the user
var userWidth = prompt("Let's calculate the are of a rectangle\nWhat is your width?");
//Validate & number cast the input
var userHeight = prompt("Please enter a height");

//How would i get the area
calcArea(userWidth, userHeight);


//Create a function that will calculate dog years

function dogYears (humanAge){
        //Inpute a human year and spitout a dog year
        //Human age * 7 = dog age
        var dogAge= humanAge*7;

        //Print out
        console.log("A dog who is " + humanAge + " is " + dogAge + " in dog years.");
}

//Calculate how old a 4 year old dog is in dog years.

dogYears(4);

//Calculate a 7 year dog
dogYears(7);

//Prompt the user
var yourDogAge = prompt("Let's figure out how old your dog is in dog is in dog years\nPlease enter your dogs human age");
//Validate and cast

dogYears(yourDogAge);
