var http = require('http');



// There is no database connection

// api ---> http://localhost:9090/login

http.createServer(function (req, res) {
    // no xml no json no csv
  res.writeHead(201, {'Content-Type': 'text/plain'});
  res.write('Hello World Parit');
  res.end();
}).listen(8081);

// data in xml
// data in json
// data in csv
.
.
.
.
.etc
// ip address and name
// either ip address or www.abc.com => 

// IP address is like a building, port is like address of house in that building. 
// now we are asking(request), give me the data . 
// Now id they give you the data, it is like (response). 
// 11.22.33.44:8080


// client ---- request ---> server
// client <------response <------server