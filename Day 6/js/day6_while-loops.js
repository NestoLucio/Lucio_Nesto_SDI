/**
 Nesto Lucio
 Section 00
 Date
 Topic
 */

//alert("testing");

//Initialize a counter veriable.

var counter = 0;

//while loop with condition
//this will run as long as the condition is true.

while(counter < 200){
 console.log("The current value is " + counter);
 //Change the value of the counter var.
 counter+=5;
 //Must change the value or it will loop forever.
}

//do while loop
//This loop will always run at least one time before checking the condition.


//Create counting var.

var i = 0;

do{
 //This code will always run at least once
 console.log("the value of i is" + i);
 i++;
}while(i>10);