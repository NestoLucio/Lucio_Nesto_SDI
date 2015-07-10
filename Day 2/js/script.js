/*
This is going to be a multi lined comment
Nesto Lucio 7-9-15
SDI Section 00
Day 2 Coding Basics.
 */

//alert("This is making sure our js file is connected");

//This is a single lined comment.
//Usually described what comes right after it.

/*
Multi-lined comment
anything in between the stars and slashed is ignored by the browsers.
 */

//Alert-  gives the user information but returns nothing to us.
alert("Welcome to SDI!");
//Console logging information
console.log("This is the console. Learn to love it!");

//Declare of variable.
//Start with the keyword var.
var whatever; //Declaration of a variable.
//Define the variable.
whatever = 45;
//Create a storage container = value;


// Declare and define a variable.
var a =2;

// Send variable value to the console so we can see it.
console.log(a)

// Change the value of a variable.
a=6;
console.log(a);

//Add 3 to the current value of a.
a=a+3;
console.log(a);

//Create another variable
var b;
b=a+3;
console.log(a);
console.log("The value of b is "+b);

//Simple math.
//Find our age.

//Create variable for year born.
var yearBorn = 1988;
var age = 2015 - yearBorn;
console.log(age);

//MATH!!
//+,-,*,/

//Find the area of a triangle.
var width = 4;
var height = 5;

var areaTriangle = width*height/2;
console.log(areaTriangle);

//Modulo - %
//Gives you the remainder.

var remainder = 31%3;
console.log(remainder);

//Find out if even or odd.
//Modulo by 2.

var evenOrOdd = 66%2;
console.log(evenOrOdd);

//0 means even.
//1 means odd.

//Assignment Operators

/*
= Assignment Operator - "is"
++ Adds 1 to the current value of the variable.
-- Subtracts 1 from the current value.
+= Addition assignment operator - adds the value after it.
-= Subtraction minus operator - subtracts the value after it.
/= Division operator - divides by the current value.
*= Multiplication assignment - multiplies the following by the current number.

 */

var tester = 5;
tester ++; // tester = tester+1;
tester --; // tester = tester-1;
tester +=3; //tester = tester+3;
tester -=6; //tester = tester-6;
tester /=3; //tester = tester/3;
tester *=6; //tester = tester*6

console.log(tester);

//Orders of Operation.
//PEMDAS - Pleas Excuse My Dear Aunt Sally.
//Partesis, Exponents, Multiply, Devide, Add, Subtract

//Find quiz averages.

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 70;

//Add up all of them and divide by the number of them.
var avarge = (quiz1+quiz2+quiz3) /3;
console.log(avarge);

//String.
//Must have matching " or '.
//Needed to separate variable names from standard text.

var kermit = "light green";
var frogName = "kermit";
console.log(frogName);

//Double of single quotes?
//Escape character.
var phrase = 'I don\'t know.\nYou never know!';
console.log(phrase);

// \ New line character.

//Booleans - true or false.
//Light switches of programming.
var yes = true;
var nope = "false";
//A string of "false" is not equal to a Boolean of false.
var notCorrect = false;

//Simple math problem.
//Find the perimeter of a triangle.
var side1 = 7;
var length1 = 6;
var perimeter = (side1 *2) + (length1*2);
console.log(perimeter);
//Are the parenthesis needed?

//Concatenation - Combining text.

var firstName = "kermit";
var lastName = "The Frog";
var fullName = firstName +" "+ lastName;
console.log(fullName+" is the color "+kermit);

//Anytime you use + with text - it changes EVERYTHING to text.
var d = "6";
var e = 7;
var combine = d+e;
console.log(combine);