/**
 Nesto Lucio
 Section 00
 7/18/2015
 Math Class
 */

//alert("testing");

//round() - normal rounding .5 + goes up .49999 goes down
//Does not permanently change the variable value, it only changes when it's called upon on


    //To change permanently change assign it to the variable
    //example : num1 = Math.round(num1)
var num1 = 9.4444;
console.log(num1);
console.log(Math.round(num1));

//floor () - This rounds off to the nearest integer.
var num2 = (6.1);
console.log (num2);
console.log (Math.floor(num2));

//ceil - Always rounds up to the nearest integer.
var num3 = 4.8;

console.log (num3);
console.log (Math.ceil(num3));

//random () - This return a number between 0 and almost 1.
var num4 = Math.random();  //Nothing goes inside the ().
console.log(num4);
//This is never a whole number

//Number between 0 and 10
var num5 = Math.random() * 10; //Multiples the almost number by 10
console.log (num5);

//Number between two other numbers NOt zero.
//Math.random()*(max - min)+min;

//Number between 50 - 80
var num6 = Math.random() * (80 - 50 +50);
console.log(num6)

//An INTEGER between 100 - 1000  || SET UP RANDOM NUMBERS BETWEEN A SET OF NUMBERS.
var num7 = Math.round(Math.random()*(1000 - 100) + 100);
console.log(num7);


//.toFixed(x) - Rounds to a decimal place - x to decimal place.
var num8 = 12.123456;

console.log (num8);
console.log (num8.toFixed(2));

//MATH CONSTANTS.
// Pi - 3.14259
//Math.PI
console.log (Math.PI.toFixed(5));

//Find the circumfrence of a circle
//2*r*pi

var radius = 7;
var circleCumfrence = 2*radius * Math.PI;
console.log(circleCumfrence);