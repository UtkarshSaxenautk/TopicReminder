const hostname = 'localhost';
const fs = require('fs')
const port = 3000;
const bday = '2003-12-27'
const moment = require('moment')
console.log(`Bday : ${moment(bday).format('LL')}`)
 const server = http.createServer((req , res) => {
     //res.setHeader('Content-type' , 'text/plain');
     //res.write("Welcome to page helo world");
     res.setHeader('Content-type' , 'text/html')
     fs.readFile('./View/index.html' , (err , data) => {
         if(err){
             console.log("Error !!!!!!" , err)
             res.end();
         } else {
              //res.write(data)
              // We can also use end method directly to display data 
              res.end(data)
         }
     })
     /*res.write('<body class = "lol" > </body>')
     res.write('<h1> Hello Welcome to my Page </h1>')
     res.write('<p> I am learning node js </p>')*/
     
        console.log('request url' , req.url) 
        console.log('request mmethod' , req.method)
 });

 server.listen(port  , () => {
    console.log(`listening on port ${port} `)
 });
const fs = require('fs');
const readstream = fs.createReadStream('note.txt' , {
    encoding:'utf-8'
})

const writestream = fs.createWriteStream('dummy.txt')
readstream.on('data' , chunk => {
    console.log('########### chunk ############')
    console.log(chunk)
    writestream.write('################   New Chunk ################## ')
    writestream.write(chunk)
    
})

fs.appendFile('note.txt' ,'So get Started  --- \r\n' , (err , data) => {
    if(err){
        console.log("Error :!!!!!!!!!!!!!!!!!!" , err)
    } else {
        console.log("Data is written")
    }
})
if(!fs.existsSync('lol')){
fs.mkdir('lol' , (err , data) => {
    if(err){
        console.log("Error in creating folder!!!!!" , err)
    } else {
        console.log("Folder created")
    }
})
} else {
    console.log("Folder Already exist !!!")
}
if(fs.existsSync('lol')){
    fs.rmdir('lol' , (err , data) => {
        if(err){
            console.log("Error in deleting folder!!!!!" , err)
        } else {
            console.log("Folder deleted yeah...")
        }
    })
} else {
        console.log("Folder Already deleted !!!")
    }


/*
fs.readFile('note.txt/', (err , data) =>{
   if (err) {
       console.log("error arises : " , err)
   } else{
       console.log(data.toString())
   }
})

fs.writeFile('./Textfile/textf.txt' , "Hello I am Ready to Start : ----- "  , (err ,data) => {
    if(err){
        console.log("Error !!!!!!!!!!" , err)
    } else {
        console.log("New Data Created ")
    }
})*/


/*const {name , marks} = require('./trial')
console.log(name , " has " , marks)

/*const Info = require('./trial')
console.log(Info.name , " has " , Info.marks)*/


/*console.log("Hello Utkarsh")

console.log(global)

global.setTimeout(() => {
    console.log("Hello World from Utk")
}, 5000);
setTimeout(() => {
    console.log("Hello World from Utk")
}, 5000);

console.log(__dirname)
console.log(__filename)

const mess = (name) => {
    console.log(name , " is good name")
}
mess("Utkarsh")*/