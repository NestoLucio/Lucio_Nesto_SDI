/**
 Nesto Lucio
 Section 00
 Date
 Topic
 */

//alert("testing");

//Crete a function
function calcArea(w,h){
        //Calculate the area
        var area = w*h;
        //Console log the result
        console.log("The area is "+ area);
        //In order to use results in main code
        //Use return and then whatever you want to return;

        return area;

}

//Call the function.
//catch the return value in a variable.
var results= calcArea(10,30);

//Access the area in main code
console.log(results);

//Calculate with a w

var results2 = calcArea(40,60);
console.log(results2);

//what is the total area of both triangles
var total = results + results2

console.log ("The combined area of both is " + total);