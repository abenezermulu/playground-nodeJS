const express = require('express'); 

const app = express(); 

app.listen(3000, () => {
    console.log("Your server is running on 3000"); 
});

// Configuring express server

app.set('port', process.env.PORT || 3100);
const port = app.get('port'); 
console.log(port);  

app.set('env', 'development'); 
console.log(app.get('env'));