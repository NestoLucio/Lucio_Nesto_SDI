/**
 Nesto Lucio
 Section 00
 Date
 Topic
 */

//alert("testing");


//Create a function that will take in a user prompter mac and min value and return a random number between them.

var min = prompt("We are going to find a random number between teo values\nWhat is the minimun value");
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
