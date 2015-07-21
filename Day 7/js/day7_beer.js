/**
 Nesto Lucio
 Section 00
7-21-15
 Beer
 */

//alert("testing");

//Let's create a loop that will write out the lyrics for the ""99 bottles of beer song"

//for (initinalizeation; condition; incrememnt of change){}

var numBeers= prompt("How many beers are on your wall?");
//Validations
while (isNaN(numBeers) || numBeers===""){
 if (isNaN(numBeers)){
  numBeers=prompt("Please type in number\nHow many beers are on your wall?");
 }else{
  numBeers =prompt("okease di bit keave blank\nHow many beers are on your wall?")
 }
}
//cast the variable
numBeers=Number(numBeers);
for(var bottles=numBeers; bottles>0; bottles--) {
 //verify that the loop works.
 //console.log(bottles);
 if (bottles===2) {
  console.log(bottles + " bottles of beer on the wall. " + bottles + " of bottles beer. You take one down and pass it around." + (bottles - 1) + " Bottle of beer on the wall");
 }else if(bottles===1){
  console.log(bottles + " bottle of beer on the wall. " + bottles + " of bottle beer. You take one down and pass it around." +  " The End.");

 }else{
  console.log(bottles + " bottles of beer on the wall. " + bottles + " of bottles beer. You take one down and pass it around." + (bottles - 1) + " Bottles of beer on the wall");
 }
}
