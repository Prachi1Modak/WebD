console.log("Prachi")

const accountId=123 /*cant change anything once initialised*/ 
let accountEmail="abc@gmail.com"
var accountPassword="abc"
accountCity="Pune"      //shouldnt use, but yea this also works
let accountState

// accountId=2
accountEmail="pqrs@gmail.com"
accountPassword="pqr"
accountCity="Mumbai"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

//let var and no variable decalaration can however be changed once initialised

console.table([accountId, accountEmail, accountPassword, accountCity])

//var is now not used, because of issue in block scope, and functional scope
//let is now used

console.log(accountState)

//when we try to print a variable which is not yet initialised, printing it shows "undefined"