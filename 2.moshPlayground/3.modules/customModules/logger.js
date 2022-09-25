const url = "https://mylogger.io/log"; 

function log(message) {
    console.log(message); 
}

// We are exporting an object, and that object will have the log method inside it. 
module.exports.log = log;

// What if we want to export the log function? 
// module.exports = log; 

// Check out the module json object
// console.log(module); 