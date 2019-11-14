var UserObjectArray = [
    {
        name: "Salman",
        age: "50",
        address: {
            street :"123",
            landmark: "Mumbai"
        },
        location:{
            latitude: 50.123,
            longitude: 1234
        }
    },
    {
        name: "Shahrukh",
        age: "52",
        address: {
            street :"1234",
            landmark: "Mumbai1"
        },
        location:{
            latitude: 19.12,
            longitude: 20.1234
        }
    },
    {
        name: "Akshay",
        age: "53",
        address: {
            street :"123",
            landmark: "Mumbai"
        },
        location:{
            latitude: 57.123,
            longitude: 1234
        }
    }
]

// salman == salman [true,true, true, true, true, true]
UserObjectArray.forEach((element,index) => {
    if(index == "Salman"){
        console.log("Elemnt : ", element, "index : ", index)
        <html>
            <body>
                <table>
                    <th>

                    </th>
                    <tbody>
                        <tr>
                            {element == "salman"} => element
                        </tr>
                        <tr>
                            {element == "Akshy"} => element
                        </tr>
                        <tr>
                        {element == "Sharukh"} => element
                        </tr>
                    </tbody>
                </table>
            </body>
        </html>
    }
});


/*
 static location, heap, location, dynamic location, local varible 
 run a program on a port === 8080 [

    location reserve []
 ]
*/