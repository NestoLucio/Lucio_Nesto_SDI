/**
 Nesto Lucio
 Section 00
 7-16-15
 Conditionals
 */

//alert("testing");

//Let's purchase a new computer.
//Are you looking for an Apple or Windows computer?

//Setting up product prices
var apple = 1300;
var windows = 500;

//If the user is wanting an apple computer. ask for amount budget amount
//If budget amount is not enough, suggest a Windows computer.

//User Prompt

userInput = prompt("are you looking for a Windows or Apple computer?");
 if (userInput.toLowerCase() != "apple" && userInput.toLowerCase() != "windows" ){
     userInput = prompt("Please type in options Apple and Windows only.")
 }

userInputPrice =  prompt("What is your current computer budget?");
 if (isNaN(userInputPrice) || userInputPrice === ""){
  //re-prompt user
   if(isNaN(userInputPrice)) {
    userInputPrice = prompt("Please type in only numeric characters");
   }
 }
console.log("test");