/**
 Nesto Lucio
 Section 00
7-21-15
 looping over arrays
 */

//alert("testing");

//Create an array of Scooby-Doo Characters.

var scoobyGang = ["Velma","Scooby", "Shaggy", "Daphne"];
//Push an array
scoobyGang.push("Fred");
scoobyGang.push ("Scooby Dum");
scoobyGang.push ("Scappy");

//Cycle through this array and tell each one of them that they solved a case.
console.log(scoobyGang.length);

for (var i = 0; i<scoobyGang.length; i++){
 //Call out scooby and shaggy to get a scooby snack
 if (scoobyGang[i] ==="Scooby" || scoobyGang[i] === "Shaggy"){
  console.log("Good job " + scoobyGang[i] + " you get a scooby snack" );
 } else{

  console.log("You solved the case, "+scoobyGang[i]);

 }
}

//Create an array of bills

var bills =[50, 10, 5, 20, 10, 40];

//Create a variable an define it for total.

var total= 0;

//Create a loop to add up all of our bills from dinner.
for(var j=0; j<bills.length; j++){
 //Test to get each item in bills
 //console.log(bills[j]);
//only add up bills 15 and greater
 if (bills[j]>=15){
  total+=bills[j];
 }
//add up the values of bills

}
console.log("The total of your bills is $" + total);