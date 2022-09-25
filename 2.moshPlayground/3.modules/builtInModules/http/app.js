const http = require('http'); 

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write("Response goes here..."); 
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify(["John", "Smith", "Mary"])); 
        res.end();
    }
}); 

server.listen(3000); 

console.log("Listening on port 3000....");