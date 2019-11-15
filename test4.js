var arr = [1,2,3,4,3,5]
console.log("Index of = ",arr.indexOf(3))

var UserArr = [
    {
        name: "Parit"
    },
    {
        name: "Akash"
    },
    {
        name: "Ss"
    },
    1
]

console.log("----->",UserArr.indexOf(1))

// array in js is dynamic in nature that means it can grow, and shrink in runtime
// array are reference type => pointers => they allocate space in heap memory
// int arr [5] = [1,2,3,4,5] = 
var myCustomArr = [
    1, "Parit", {name:"XYZ"}, 1.2
]

myCustomArr.push(true)
myCustomArr.pop()
myCustomArr.pop()

console.log("myCustomArr = ",myCustomArr)


var num = "1"

console.log("With Parse Int = ", num,   parseInt(num))

console.log("With Parse Int typeof = ", typeof(num),   typeof(parseInt(num)))

var num2 = 20

console.log("to String  = ",num2.toString(), typeof(num2.toString()))

// parseFloat ---->DIY