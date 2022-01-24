const fs = require('fs')
const http = require('http')

const port = 3000
const hostname = 'localhost'

const server = http.createServer((req , res) => {
    let  route = "./Views"
    switch (req.url) {
        case '/':
            route += '/index.html';
            res.statusCode = 200;
            break;
         case '/study':
           route += '/study.html';
           res.statusCode = 200;
              break;    
         case '/home':
          //route += '/study.html';
           res.statusCode = 301;
           res.setHeader('Location' , '/')
             break; 
        default:
            route += '/404.html'
            res.statusCode = 404;
            break;
    }
    res.setHeader('Content-type' , 'text/html');
    fs.readFile(route , (err , data) => {
        if(err){
            console.log("Error!!!!" , err)
            res.end();
        } else {
             res.end(data);
        }
    });
});

server.listen(port , () => {
    console.log(`listening on port : ${port}`)
})