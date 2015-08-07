/**
 Nesto Lucio
 Section 00
 Date
 Topic
 */

//alert("testing");

//isNaN(item to test)
//True if not a number
//False if it is a number.

//To test blank we (item === "")

//(item .toLowercase () ! ="yes"  && item.toLowerCase() !="no")

//For Validation we use a while loop
//Use a while loop because we don't know how many times the user will get it wrong.

//Ask the user for a number

var userNum=prompt("Please enter in a number");
//Directly after each prompt let's validate for that prompt

while(isNaN(userNum) || userNum ===""){
 //re-prompt user
 userNum = ("Please only use numbers and don't leave blank.\n please type in number");
}

console.log("after the while loop")

//ask the user for either red or black
//validate

var color=prompt("Please choose red of black");

while (color.toLowerCase() != "red" && color.toLowerCase() != "Black"){
 //re-prompt user

 color = prompt ("Please only type red or black");

}
