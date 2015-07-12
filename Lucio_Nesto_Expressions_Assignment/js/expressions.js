/**
Nesto Lucio
 Class 00
 7-11-15
 Expressions
 */

//alert("Expressions Assignment");

//Concept idea.
//How much money on is spend going out to the movies.

//Array - Movies to display set up
var moviesOut = ["Titanic The Sequel", "Kung-Fu Midgets", "Transforming The Robot Cars", "The Movie -Based on a true story", "2 hours of Movie Trailers"];

console.log(moviesOut);

//Replaced "The Movie - Based on a true story for TED.

moviesOut[3] = "TED";
console.log(moviesOut);

//pushed "The Hulk" last to the movie list.
moviesOut.push("The Hulk")
console.log(moviesOut);



//Movie cost calculations.

var userInputMovies = prompt("Enter movie ticket cost.");
var userInputAmountOfTickets = prompt("Enter amount of tickets needed.")

console.log ("Your total amount spent on tickets is " + userInputMovies * userInputAmountOfTickets);

//Calculating extra spendings.

var popcorn = 4;
var soda = 3;

var userInputPopcorn = prompt("How many Popcorns will be purchase? Popcorn costs $4.00");
var userInputSoda = prompt("How many sodas will be purchased? Soda costs $3.00");


console.log ("Your total spend on popcorn is $"+ popcorn * userInputPopcorn + " and your total amount on sodas will be $" + soda * userInputSoda);

//Calculating Total cost

var totalCost  = (userInputMovies * userInputAmountOfTickets) + (popcorn * userInputPopcorn) + (soda * userInputSoda);

console.log ("Your total overall cost is $" + totalCost);
