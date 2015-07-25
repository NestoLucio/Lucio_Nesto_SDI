/**
 Nesto Lucio
 Section 00
 Date
 Topic
 */

//alert("testing");

//Create variables for height and width.
 var hight = 8;
 var width = 6;

//Create another variable for a base of triangle.
var base = 5;



//function call to area
var resultsArea = calcArea(hight,width);
console.log(resultsArea);


//Create a function to calculate the perimeter of rectangle.
var calcPeri = function (h, w){
      var periTotal = 2*h+2*w;
      return periTotal;
};

//Function call must go under the function definition for anon.
var resultsPeri = calcPeri(hight, width);
console.log (resultsPeri);

//Create a function to calc the area of a trinagle.
function calcArea(h, w){
      var area=w*h;
      return area;
}

//Create a function to calculate the area of triangle.
//create a anon function

var triArea = function (b, h){
      var area = .5*b*h;
      return area
};

//Function call to triangle area

var triAreaTotal = triArea(base, hight);
console.log(triAreaTotal);

//Create a procedure that will console log the rectangle perimeter and area.

function prinOut(p, a){
      console.log("The perimeter is "+ p);
      console.log("The area of the rectangle is " + a)

}

//Function call
prinOut(resultsPeri, resultsArea);