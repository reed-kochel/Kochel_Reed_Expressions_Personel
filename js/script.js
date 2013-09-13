// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF00";

//kochel_Reed_Expressions_Personal



//Determining how much I make in a bi-weekly pay period

var hours = 40; //hours per week I work
var wage = 16.00;  //how much I make per hour of work
var weeks = 2;  //number of weeks in my pay period, two weeks per period, or bi-weekly
var paycheck = hours * wage * weeks; //the formula to determine the amount of money per paycheck.
console.log("This is how much I make in a two week period:");
console.log(paycheck); //the result being printed in web browser console.
var userInput = prompt("Enter the hours you work"); //calculating other peoples paycheck, starting with hours work.
var userInput = prompt("Enter How much you make per hour"); //Putting hours wokred into prompt
var userInput = prompt("Enter how many weeks are in your pay period") //Putting in how many weeks are in a pay period
console.log("This is how much you make in your pay period:");
alert("The amount you make is displayed in the web browser console!");
console.log(paycheck);


