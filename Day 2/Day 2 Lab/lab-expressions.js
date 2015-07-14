/**
Created by Nesto Lucio on 7/9/2015.
 SDI Class 00
 Lab 2 Assignment - Expressions.
 */

//alert("js script attached");

//alert("SID Lab Assignnment - Lab Expressions");

//Console logging information.
console.log("Thus be the console.");

//A Piece of the Pie - Problem #1.
//Day 2 - Lab.
//Start of variables.

var slices = 19;
var people = 8;
var amountOfPizzas = 10;
var total = slices * amountOfPizzas;

//Calculate the number of slice per person.
var slicesPerPerson = (slices * amountOfPizzas/people);

console.log("Each person ate"+" "+slicesPerPerson+" "+"of pizza at the party.");

//Number of slices sparky gets to eat.
//Part II of problem.

var remainder = (slices * amountOfPizzas) % people;

console.log("Sparky got"+" "+remainder +" "+"slices of pizza.");

//End of A Piece of the Pie.

//Start of Problem #2 Average Shopping Bill.
//Weekly grocery spendings.

var week1 = 120;
var week2 = 220;
var week3 = 145;
var week4 = 225;
var week5 = 130;

//Total amount spent on groceries.

var total = week1+week2+week3+week4+week5;

//Average grocery spendings.

var average = total /5;

console.log("you have spent a total of"+" "+total+" "+"on groceries over 5 weeks"+ " " +"that is an avarage of"+" "+ average+" "+"per week.");

//Part II of Average shopping bill.
//Discounts

//var definitions

var originalPrice = 25;
var discount = 25;
var discountPercentage = discount /100;
var chicken = "lean chicken breast";
var salesTax = .10;
var calculateTax = originalPrice * salesTax;

//Programmed Calculations items.
//With tax, without tax, discount + tax, discounts(no tax).

var withTax = originalPrice + salesTax;
var withoutTax = originalPrice;
var withDiscountNoTax = originalPrice - (originalPrice * discountPercentage);
var withDiscountWithTax = originalPrice - (originalPrice * discountPercentage) + calculateTax;


console.log("Your"+" "+chicken+" "+"was originally $"+originalPrice+" "+"but after a "+ discount +"% discount, it is now $"+ withDiscountNoTax+" "+"without tax, and $"+withDiscountWithTax+" "+"with tax.");


//end of tax and non-tax price.
