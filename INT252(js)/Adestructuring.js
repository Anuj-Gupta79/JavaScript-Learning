// ES5
const arr = ['js', 'C++', 'java', 'golang']

var Top1 = arr[0]
var Top2 = arr[1]
var Top3 = arr[2]
console.log("My Fav Programming Language is " + Top2)

// ES6
let[top1, top2, top3, top4, top5 ] = arr
console.log("My Fav Programming Language is " + top2)

console.log("Length " + arr.length)

let [top,,,topLast] = arr
console.log(`My Fav Programming Language is ${top} and least like language is ${topLast}`)