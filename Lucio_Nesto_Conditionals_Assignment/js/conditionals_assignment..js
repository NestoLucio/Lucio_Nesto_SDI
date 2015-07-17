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

userAge = prompt("Are you 18 or older?");
if (isNaN(userAge) || userAge === "" ){
 //re-prompt user
 userAge = prompt("Please type in numeric number");
} else if (userAge <= 18){
 alert ("Sorry, You're not old enough to use this platform.");
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

if (userInput === "apple" && apple >= 1300){
 console.log("Congrats you can buy an Apple Computer");
} else if (userInput === "windows" && windows >= 300 ){
 console.log("Congrats, you can buy a windows computer.");
}