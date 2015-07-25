/**
 Nesto Lucio
 Section 00
 Date
 Topic
 */

//alert("testing");


//Create a function that will take in a user prompter mac and min value and return a random number between them.

var min = prompt("We are going to find a random number between teo values\nWhat is the min value");
//validate
 while (isNaN(min) || min===""){
        if (isNaN(min)){
         min = prompt ("Please only type in numbers and what\nWhat is the min value");
        }else{
         min=prompt("Please do not leave blank.\nWhat is the min value");
        }
 }
//Number cast or parseInt
min=Number(min);

//Var for max
var max =("What is the max value");
//Validate prompt

var max = prompt("We are going to find a random number between teo values\nWhat is the max value");
//validate
        while ((isNaN(max) || max==="") || max<=min){
        if (isNaN(max)){
        max = prompt ("Please only type in numbers and what\nWhat is the max value");
        } else if (max<min && max !=""){
         max=prompt("Please make sure that the max value is grater than the min value" + " The min value is. " +min+ " What is the max value?");
        } else{
        max=prompt("Please do not leave blank.\nWhat is the max value");
        }
}
//Number cast or parseInt
max=Number(max);

console.log(max + " and " + min);

