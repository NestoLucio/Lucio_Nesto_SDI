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

userAge = prompt("How old are you?");
if (isNaN(userAge) || userAge === "" ){
 //re-prompt user
 userAge = prompt("Please type in numeric number");
}

userInput = prompt("are you looking for a Windows or Apple computer?");
 if (userInput.toLowerCase() != "apple" && userInput.toLowerCase() != "windows" ){
     userInput = prompt("Please type in options Apple and Windows only.")
 }


userInputPrice =  prompt ("What is your current computer budget?");
 if (isNaN(userInputPrice) || userInputPrice === ""){
  //re-prompt user
   if(isNaN(userInputPrice)) {
    userInputPrice = prompt("Please type in only numeric characters");
   }
 }

if (userInput === "apple" && userInputPrice >= apple){
 console.log("Congrats you can buy an Apple Computer");
} else if (userInput === "apple" && userInputPrice < apple ){
 console.log("Sorry, you need $" + (apple - userInputPrice) + " to buy the Apple, How about a windows?");
}

if (userInput === "windows" && userInput>=windows){
 console.log("Congrats you can buy a windows Computer");
} else if (userInput === "windows" && userInputPrice < windows){
 console.log("you need $" + (windows - userInputPrice) + "keep saving up, one day you'll owe something.");
}