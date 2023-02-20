function fun(a,b,...c) {
    console.log(`${a} ${b}`)
    console.log(c)
    console.log(c.length)
    console.log(c[0])
}

fun('abc','def', 'ngf', 'jkl')

function sum(...input){
    console.log(...input)
    let total = 0
    for (let i of input)
        total += i
    console.log(total)    
}

sum(2,1,3,5,6,8,4,6,18,9,3)