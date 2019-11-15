var arrObj = [
    {name:"Apple"},
    {name:"Bat"},
    {name:"Cat"}
]

var arr = [1,2,3]

 var UserObject = {
     "name": "Parit",
     "class" :"MCA",
     "age":28,
     "address": {
         "street": "xyz"
     },
     "height": 5.11
 }

 for (let key in UserObject) {
     if(key == "address"){
        // console.log("The key in object is =", key)
        // console.log("The Value in Object is =",UserObject[key]) 
     }

     // hasOwnProperty return true or false and check if kye is present in object or not
    if(UserObject.hasOwnProperty("xyz")){
        //dynamic key:value[property] addition in object
        UserObject["FavColors"] = "BLack"
    }else{
        UserObject["FavColors"] = "BLue"   
    }
  }

  console.log("UserObject = ",UserObject)

  // delete property from object
  delete UserObject["FavColors"]

  console.log("UserObject = ",UserObject)

  console.log("typeof = ", typeof(UserObject.name))