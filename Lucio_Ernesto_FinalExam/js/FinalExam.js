/**
 Nesto Lucio
 Section 00
 07-30-2015
 Final Exam
 */

//alert("testing");

//Prompt the user for a cost of an item.
var itemCost = prompt("What is the cost of your item?");

//Validate user prompt to make user it is a number and that it is not left blank.
while (isNaN(itemCost) || itemCost===""){
      itemCost = prompt("Please do not leave blank and only put in numeric characters.");
}
//Test variable
console.log("The item cost is "+itemCost);

//Prompt the user for a discount - This number should be 0->100.
var itemDiscount = prompt("What is the discount amount?");

//Validate user prompt to make user it is a number and that it is not left blank.

while ((itemDiscount>=100 || itemDiscount==="") || (isNaN(itemDiscount)) || itemDiscount<=0 ){
 itemDiscount = prompt("Please do not leave blank and only put in numeric characters between 0 and 100, Please make sure to put a value larger than 0");

}

//Test Variable
console.log("The discount amount is " +itemDiscount+"%" );

//Create a function that will the discount cost.
function discountTotal (itemCost, itemDiscount){
      var discount = itemCost*(itemDiscount/100);
      var totalPrice = itemCost - itemDiscount;
      return totalPrice;
}
var discountedPrice = discountTotal(itemCost,itemDiscount);
console.log("The final cost of an item that costs $" + itemCost + " with a discount of of " + itemDiscount + "% is $" + discountedPrice);


/*
Code Test 1
itemCost = 500
itemDiscount = 40

Final result = "The final cost of an item that costs $600 with a discount of of 40% is $560"


Code Test 2
 itemCost = 1200
 itemDiscount = 30

 The final cost of an item that costs $1200 with a discount of of 30% is $1170
 */