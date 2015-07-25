/**
 Nesto Lucio
 Section 00
 07-23-2015
Functions_Worksheet
 */

//alert("testing");

//Calculate the circumference of a circle.
//Create a funtion


var radious1=50;
var radious2=40;


function calcCircle(r){

        //calculate the circumference with the radius (circumference = C=2πr)
        var diameter =50;
        var circumTotal = (2*Math.PI) * r;
        //test variables.
        //console.log("The circumference of the circle is " + circumTotal);

        //Return circumTotal
        return circumTotal;

}

//Create catch all - return
var result = calcCircle(radious1);
var result2 = calcCircle(radious2);
//Call out function
//And give it an argument.
//calcCircle(50);
console.log("The circumference of the circle is " + result);
//Test second return
console.log("The circumference of the circle is " + result2);

//It takes 8.666666667 bee stings per pound to kill an animal.
//Calculate how many bee stings are needed to kill an animal in a function

var pounds = 30

function stings(p){
        //calculate the amount of stings it takes to kill an animal
        var beeStings = 8.666666667;
        var death = p * beeStings
        //Test out variables
        //console.log(death);

        //Create return
        return death;
}

//Callout function
//stings(4);

var weight = stings(pounds);
console.log("It takes " + weight + " bee stings to kill this animal.");

