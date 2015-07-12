/**
 Nesto Lucio
 Section 00
7-11-15
 Casting Variables
 */

//alert("testing");

//Casting variables means treating one variable like another.
var stringVar ="6";
var results = 7 + stringVar;
console.log(results);

//Number() - treats what is inside of () like a number, if possible.

var castingResults = 7 + Number(stringVar);
console.log (castingResults)

//Cast numbers as strings.
//String ()
var areaCode = 407;
var prefix = 555;
var lineNumber = 1234;

var phoneNumber = String(areaCode)+String(prefix)+String(lineNumber);
console.log(phoneNumber);

//All prompt () returns text strings!!
var videoGamesCurrent = prompt("How many video games do you currently own?");
var gamesBought = prompt("How many games did you buy today?");
var totalGames = Number(videoGamesCurrent)+Number(gamesBought);
console.log(totalGames);

//Parsing Integers.
//Looks through text strings and returns the first integer.
//The first character in the text string must be the number.
//Spaces aren't counted.
//If it cannot convert it, it returns "NaN" Not a number.

var a = parseInt("40 years old.");
console.log(a);

var b = parseInt("He is 40 years old.");
console.log(b);

var c  = Number("40 years old");
console.log(c);

//ParseFloat allows for decimal places, INT does not!
var d = parseFloat("30.5 years old")
console.log(d);


