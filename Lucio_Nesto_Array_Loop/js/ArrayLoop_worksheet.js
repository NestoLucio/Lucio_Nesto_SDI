/**
 Nesto Lucio
 Section 00
07-21-2015
 ArrayLoop worksheet
 */

//alert("testing");


//Create prompts based on the Justice League.



var avengers =["iron man","the hulk","captain america","black widow","hawkeye"];
var fightAvengers = prompt("Choose what member from the Avengers you will be fighting. " + avengers);
var heroCount = 0;
var whichHero = 0;
//console.log(fightAvengers);


//Validate user prompt.
for(var j = 0; j < avengers.length; j++){
 if(fightAvengers.toLowerCase() === avengers[j])
 {
   heroCount++;
  whichHero = j;
 }
}
//console.log(heroCount);

while(heroCount === 0) {
 j = 0;
//re-prompt user
 fightAvengers = prompt("Villain DataBase only has information on The Avengers Listed Below " + "Which Avenger will you be bringing down? " + avengers);
 for (var j = 0; j < avengers.length; j++) {
  if (fightAvengers.toLowerCase() === avengers[j]) {
   heroCount++;
   whichHero = j;
  }
 }
}
//console.log(avengers[whichHero]);
//Set up hero weaknesses.
if(avengers[whichHero]==="iron man"){
 console.log(avengers[whichHero] +" Weakness:\n EMP Pulse, Alcohol, Kidnapping Pepper Pots");
}else if(avengers[whichHero]==="the hulk"){
 console.log("If you're fighting The Hulk...Pray for a miracle.")
}else {
 console.log(avengers[whichHero] + " Weakness:\njust a human. You just have to aim right.");
}
//Console log out
console.log("Good luck with your fight....Hail Hydra?");