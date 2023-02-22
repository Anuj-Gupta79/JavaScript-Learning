
// Challenge 1: Use if else condition to store the respective comments in the variable "message11" based on the score1 input.
// when the user gives a number input and clicks on the submit button, the respective comments should be displayed.
// Here are the values and their respective comments
// Score1 of less than 0 or more than 100 — “This is not possible. An error has occurred.”
// Score1 of 0 to 19 — “That was a terrible score1!”
// Score1 of 20 to 39 — “You know some things. Needs improvement.”
// Score1 of 40 to 69 — “You did a passable job, not bad!”
// Score1 of 70 to 89 — “That’s a great score1. You really know your stuff.”
// Score1 of 90 to 100 — “What an amazing score1!”

const prompt = require("prompt-sync")()

let score1 = prompt("Enter the score1 : ")

function comment1(){
    var message1
    if(score1<0 && score1>100){
        message1 = "This is not possible. An error has occurred."
    }
    else if(score1>=0 && score1<=19){
        message1 = "This was a terrible score1!"
    }
    else if(score1>=20 && score1<=39){
        message1 = "You know some things. Needs improvement."
    }
    else if(score1>=40 && score1<=69){
        message1 = "You did a passable job, not bad!"
    }
    else if(score1>=70 && score1<=89){
        message1 = "That’s a great score1. You really know your stuff."
    }
    else{
        message1 = "What an amazing score1!"
    }
    console.log(message1)
}

comment1()




// Challenge 2: Use Switch statements to store the respective comments in the variable "message2" based on the input.
// when the user gives a number input and clicks on the submit button, the respective comments should be displayed.
// Here are the values and their respective comments
// Score1 of less than 0 or more than 100 — “This is not possible. An error has occurred.”
// Score1 of 0 to 19 — “That was a terrible score1!”
// Score1 of 20 to 39 — “You know some things. Needs improvement.”
// Score1 of 40 to 69 — “You did a passable job, not bad!”
// Score1 of 70 to 89 — “That’s a great score1. You really know your stuff.”
// Score1 of 90 to 100 — “What an amazing score1!”

let score2 = prompt("Enter the score2 : ") 

function comment2(){
    var message2
    switch (score2) {
        case score2<0 && score2>100 :
            message2 = "This is not possible. An error has occurred."
            break
        case score2>=0 && score2<=19 :
            message2 = "This was a terrible score2!"
            break
        case score2>=20 && score2<=39 :
            message2 = "You know some things. Needs improvement."
            break
        case score2>=40 && score2<=69 :
            message2 = "You did a passable job, not bad!"
            break
        case score2>=70 && score2<=89 :
            message2 = "That a great score2. You really know your stuff."
            break
        default:
            message2 = "What an amazing score2!"
    }
    console.log(message2)
}

comment2()




