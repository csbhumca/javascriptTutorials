

var arr = [1,2,3,4,5]

let arrStr = [ "Bat", "Cat", "Dog", "Apple"]

let itrArr = function(__arr){
    for(var i=0; i<__arr.length; i++){
        if(__arr[i]=="Apple"){
            console.log("Index = ",i)
        }
    }
}



// forEach // no indexing,
// forEach() is a function
// forEach(i){  wrong convention
//    console.log(i)
//}
// 
// [ "Bat", "Cat", "Dog", "Apple"].forEach( funciton(element){console.log(elent)} )

// function(funtion(){})

let itrArrForeach = function(__arr){
    
    __arr.forEach(function(element, index){
        console.log(element, index)
    });
    // => is equivalent to funciton
    // __arr.forEach(element => {
    //     console.log(element)
    // }
    // );
}

// == vs === difference Question for you
//itrArr(arr);
//itrArr(arrStr);
// itrArrForeach(arrStr)

// function memory address alocation at compile {} X0182asf