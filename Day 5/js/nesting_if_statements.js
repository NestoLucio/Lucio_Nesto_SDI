/**
 Nesto Lucio
 Section 00
 Date
 Topic
 */

//alert("testing");

//Some decision effect other decisions.

//If it is warm outside, let's go to the beach
//If it is not warm outside, let's go to the movies.

//Get temperature as a variable.

var temp = prompt("What is the current temperature?");
//var waterTemp = prompt("What is the temperature of the water?");
//Test temp
//Warm is 80 and above

if (temp >= 80){
 //Code will run if temp is 80+
 console.log("Let's go to the beach");
 //If the water is above 74º let's go swimming.
//If not let's get a tan.

    if (waterTemp > 75){
   console.log("Let's go swimming!");
   } else {
     console.log("Let's get a tan!");
 }
} else {
 console.log("Let's go see a movie");

 //Ask if kids are going with.
 var kids = prompt("Are you bringing children\n Please type yes or no");

 //Validate the kids prompt
 //Expecting yes or no.

 if (kids.toLowerCase() != "yes" && kids.toLowerCase() != "no"){
  //Re prompt the user
  kids= prompt("Please only type in yes or no\n Are you bringing children?");
 }

 //.toLowerCase() - Changes the test string to lower case
console.log(kids.toLowerCase());
 //Perminantly changes the value
 kids=kids.toLowerCase();
 console.log(kids);

 //If kids are coming to the movies, go see Minions if not go see Ant-Man.
 if (kids.toLowerCase()==="yes"){
  console.log("Go see the Minoins movie");
 } else {
  console.log("Go see Ant-Man");
 }
}



