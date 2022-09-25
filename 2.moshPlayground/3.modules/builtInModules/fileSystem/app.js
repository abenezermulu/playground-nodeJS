const fs = require('fs');

// Blocking - Synchronous
// const files = fs.readdirSync('./');
// console.log(files);

// Non-Blocking - Asynchronous
// This functions/ methods have a callback functions to run after execution, 
// in this case we have a callback function to get back the response, i.e. error or an array of files.
fs.readdir('./', function(err, files) {
    if(err)
        console.log("Error ", err); 
    else
        console.log("Result ", files);
});