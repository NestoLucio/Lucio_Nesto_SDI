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


//User Prompt

userAge = prompt("How old are you?");
if (userAge<18)
 { (userAge<18)? alert("You are not old enough to use this platform."): alert("Let's continue");
} else {

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
//Starting If - if user selects apple and has enough money.
 //console.log("congrats").
if (userInput === "apple" && userInputPrice >= apple){
 console.log("Congrats you can buy an Apple Computer");
} else if (userInput === "apple" && userInputPrice < apple ){
 //User does not have enough to buy an Apple compute
 console.log("Sorry, you need $" + (apple - userInputPrice) + " to buy the Apple, How about a windows?");
} else if (userInput === "windows" && userInputPrice >= windows){
 //User has enough to buy apple computer.
 console.log("Congrats you can buy a windows Computer");
} else if (userInput === "windows" && userInputPrice < windows){
 //User does not have enough to buy computer.
 console.log("you need $" + (windows - userInputPrice) + " keep saving up..Maybe one day you'll own something.");
}

}