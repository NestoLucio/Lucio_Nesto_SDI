/**
 Nesto Lucio
 Section 00
11-14-15
 Ternary
 */

//alert("testing");

var gpa = 1.9;

//If your GPA is over 2.0 then you can graduate.
if (gpa>2){
 console.log("Congrats, you can graduate.");
} else {
 console.log("Sorry, your an idiot.")
}

//Convert this to a ternary.
//conditions
(gpa > 2)? console.log("GPA is great!"): console.log('GPA is too low');

//Test kids

var age = 12;
var book;

book = (age>10)? "The Time Machine" : "Green Eggs and Ham";
var book2 = (age<=10)? "Green Eggs & Ham" : "The time Machine";
console.log("your kid should read "+ book);
console.log(book2);
