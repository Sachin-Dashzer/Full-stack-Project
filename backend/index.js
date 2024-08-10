// Everything about node modules

// 1. Global modules

// console.log(__dirname); // to find the dirctory name of current file
// console.log(__filename); // to find the file name of current file

// 2. Require and export modules

// const add = require('./add'); // when we have to import data from another file
// console.log(add( 3, 4));

// 3. File system modules

// const fs = require("fs");

// fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {    // To created a new file and write something on it
//     if (err) throw err;
//     console.log('File written!');
// });

// fs.appendFile("example.txt", " This is Dashzer", (err) => {     // To append something new on the last of the file
//   if (err) throw err;
//   console.log("File written!");
// });

// fs.readFile("./example.txt", (err, data) => {       // To read everthing from the given file
//   if (err) throw err;
//   console.log("File Readed!");
//   console.log(`${data}`);
// });


// 4. http modules


    // const http = require('http');

    // const server =  http.createServer( (req , res)=>{      // The server is created here
    //     res.statusCode = 200;

    //     res.end("<h1>hello brother</h1>");
    
    // })

    // server.listen(3000 , ()=>{       // The server is started here on 3000 port number

    //     console.log("server is started");
    // })