// Importing the module
const readline = require("readline-sync")
const prompt = require("prompt-sync")()

console.log("Enter the number: ")
let a = Number(readline.question())
console.log(a);

let b = prompt("Enter the another number: ")
console.log(Number(b));
