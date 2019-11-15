//IIFE  ===> Anonymous function, Immediate invoking function exection
var result = (function(){
    var userObj = {
        name: "Parit",
        class: "MCA"
    }
    return userObj
})()
console.log("result = ",result)


// This is not IIFE and Anynomouse
// var getUser = function(){
//     var userObject = {
//         name: "Parit",
//         class: "MCA"
//     }
//     return userObject
// }

// var result  = getUser()

// console.log("The result of getuser = ",result)

var getUser = function(){
    return function(){
        return 5
    }
}
getUser()()
console.log("The age of new user is ",getUser()())