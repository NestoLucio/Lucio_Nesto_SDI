/**
 Nesto Lucio
 Section 00
7-25-2015
 day_9_Procedures
 */

//alert("testing");
//this is a normanl function
 function calcArea(w, h){
         var area = w*h;
         //REturns a variable
         return area;
}

//Function call to calc area
//calcArea(10,20);
//cacth the retunr value
var results1 = calcArea(10,20);
console.log(results1);


//THIS IS A PROCEDURE
//A list of steps to do
//Returns NOTHING.

function calcPeri(w,h){
       var peri = 2*w +2*h;
       console.log(peri);
}
//Function call for ou procedure
//This function call does not catch anything
calcPeri(10,20);