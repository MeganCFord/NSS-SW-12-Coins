//Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.


var coinPurse = {};
var myMoney = prompt ("how much money do you have?")

var howManyCoins = function() {
  var howManyQuarters = (myMoney / .25);
  coinPurse.quarters = Math.floor(howManyQuarters);
  var howManyDimes = (((howManyQuarters - coinPurse.quarters) * .25) / .10);
  coinPurse.dimes = Math.floor(howManyDimes);
  var howManyNickels = (((howManyDimes - coinPurse.dimes) * .10) / .05);
  coinPurse.nickels = Math.floor(howManyNickels);
  var howManyPennies = (((howManyNickels - coinPurse.nickels) * .05) / .01);
  coinPurse.pennies = Math.ceil(howManyPennies);
console.log(coinPurse);
}

// myMoney= prompt("how much money do you have?");


myMoney = parseFloat(myMoney);


howManyCoins();

////////////////////////
///all of this stuff doesn't work at all. this is the wrong way to do it. I'm keeping it as a reminder of how not to do it. 
////////////////////////
//
//var myMoney;
//var howManyQuarters = function(myMoney) {
//   return Math.floor(myMoney / .25)
//   console.log("quarters",  );
// }
// var howManyDimes = function(myMoney) {
//   return Math.floor(howManyQuarters / .1)
// }


// var howManyNickels = function(myMoney) {
//   return math.floor(howManyDimes / .05)
// }

// var howManyPennies = function(myMoney) {
//   return math.floor = (howManyNickels / .01)
// }

// var coinCounter = function(myMoney) {
//   var coinPurse = {}
//   console.log("coin purse", coinPurse);
// }


// console.log(coinCounter(0.82));

