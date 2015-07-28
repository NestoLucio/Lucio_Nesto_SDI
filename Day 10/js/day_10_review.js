/**
 Nesto Lucio
 Section 00
07-28-2015
 day_10_review
 */

//alert("testing");

//Figure out how much pizza cost per sq inch
//Calculate pizza slice cost

//Prompt the user for:
//Radius of a pizza
//cost of pizza
//Number of Slices

var pizzaRadius = prompt("We are going to calculate how much pizza cost\nWhat is the radius of your pizza?");
//Validate the user
while(isNaN(pizzaRadius) || pizzaRadius===""){
       //Re-prompt
       pizzaRadius = prompt("Please do not leave blank and only use numbers\nPlease enter your pizza's radius");
}

var pizzaCost = prompt("How much does you pizza cost in total");
//Validate
while(isNaN(pizzaCost) || pizzaCost===""){
       //Re-prompt
       pizzaCost = prompt("Please do not leave blank and only use numbers\nPlease enter your pizza's cost");
}

var pizzaSlices = prompt("How many slices are in your pizza?");
while(isNaN(pizzaSlices) || pizzaSlices===""){
       //Re-prompt
       pizzaSlices = prompt("Please do not leave blank and only use numbers\nPlease enter your the amount of pizza slices");
}

//Create a function to calculate the area of pizza/
function pizzaArea(r){
       //arrea of a circle  is r*r*PI
       var area = Math.pow(r,2)*Math.PI;
       return area;
}

//Create function that calculates the price per sq in
function pizzaSqInCost(price, area){
       //Cost per inch = price/area
       var costPerInch = price/area;
       //Since this cost - aka dollars and cents
       //Round to two decimal place.
       costPerInch= costPerInch.toFixed(2);
       return costPerInch;
}

//Create function tta calculate the cost per slice.
function pricePerSlice (slices, price){
       //Cost per slice = pizzaSlice/ number of slices.
      var costPerSlice = price/slices;
      //Round to the 2nd decimal
      costPerSlice = costPerSlice.toFixed(2);
      return costPerSlice;
}

