/**
 Nesto Lucio
 Section 00
 Date
 Topic
 */

//alert("testing");

//Test a steak temperature see if it is done.

/*
 Extra-rare or Blue (bleu) - 115–120 °F
 Rare (saignant) -120–130 °F
 Medium rare (à point)	- 130–140 °F
 Medium (demi-anglais) - 140–150 °F
 Medium well (cuit)	 - 150–160 °F
 Well done (bien cuit)	- 160 °F+
 */

//variable for steak temp
var steakTemp = prompt("What is the temperature in Fº of your steak>");
/*

//Validate the user prompt.
//console.log(isNaN(7));
//console.log (isNaN("car"));

//Testing for blank.
if (steakTemp === ""){
 //This code will run if the user leaves the prompt blank.
 //Re-prompt user.

 steakTemp = prompt("Please do not leave blank\n what is the temperature of your steak?");
}

if (isNaN(steakTemp)){
 //This code will run if steak temp is not a rumber
 //Re-Prompt using the same variable
steakTemp = prompt("Please only type in numbers.\ What is the tempeture in Fº of your steak.");
}

*/

//Combine both validation questions.

if (isNaN(steakTemp) || steakTemp===""){
 //Re-promp the user
 if(isNaN(steakTemp)){
  steakTemp = prompt("Please do not leave blank and only use numbers.");

 } else {
  steakTemp = prompt("Please do not leave blank");
 }
}

if (steakTemp <= 115){
console.log ("Steak is still raw, do NOT eat it!");
} else if (steakTemp <= 120){
 console.log ("The Steak is extra rare.");
} else if (steakTemp <= 130){
 console.log("The steak is rare");
} else if (steakTemp <= 140){
 console.log("The Steak is medium rare.");
} else if (steakTemp <= 150){
 console.log ("The steak is medium");
} else if (steakTemp >= 160){
 console.log ("The steak is medium well");
} else {
 console.log ("YOU BURNT THE STEAK!");
}