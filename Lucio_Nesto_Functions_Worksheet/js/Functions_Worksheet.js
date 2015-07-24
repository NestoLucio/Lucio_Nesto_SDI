/**
 Nesto Lucio
 Section 00
 07-23-2015
Functions_Worksheet
 */

//alert("testing");

//Calculate the circumference of a circle.
//Create a funtion


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
var result = calcCircle(80);
var result2 = calcCircle(140);
//Call out function
//And give it an argument.
//calcCircle(50);
console.log("The circumference of the circle is " + result);
//Test second return
console.log("The circumference of the circle is " + result2);

