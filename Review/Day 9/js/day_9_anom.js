/**
 Nesto Lucio
 Section 00
07-25-2015
 day_9_anom
 */

//alert("testing");

//Basic anonymous function.
//Var functionName = function (){};

//Extremely popular in JS and Jquery
//Important in Object Oriented Programing
//For now, it is a matter of style code choice between anon and regular fucntion.

//Create an anon function to calculate of a triangle.

var triArea = function (b, h){
       var area =.5*b*h;
       return area;
};

//Function call for a non function
//Must be after the definition
var results = triArea(10,20);

console.log(results);