const express = require('express')
const Topic = require('./models/Subject.js')
const app = express()
const mongoose = require('mongoose')
const { find } = require('./models/Subject.js')
const mongodb = 'mongodb+srv://utk:utkarsh@utkcluster.fuxh4.mongodb.net/Subject?retryWrites=true&w=majority'
app.set('view engine' , 'ejs');
app.use(express.urlencoded({extended:true}));
mongoose.connect(mongodb , {useNewUrlParser:true , useUnifiedTopology:true}).then(()=> { 
    console.log('connected')
    app.listen(3000)
}).catch(err =>console.log(err))

/*app.get('/addtopic' , (req, res) => {
    const topic = new Topic({
        name:'Social Science',
        topicname:'French Revolution'
    });
    topic.save().then(result=>res.send(result)).catch(err => console.log(err))
})*/


app.get('/' , (req , res) => {
     /*const detail =[
        {name : "English" , topic : "Greenland"},
        {name : "Social Science" , topic : "French Revolution" },
        {name : "Science" , topic : "Motion"},
        {name : "Hindi" , topic : "Do bailo ki katha"}
    ]
     //res.send('<h1> Hello Utkarsh </h1><input type ="number"> Enter number </input>')
     //res.sendFile('./Views/index.html', {root:__dirname})
     res.render('index' , {detail , nav : 'Study page'} );*/
     res.redirect('/get-topic' );
});
app.get('/get-topic' , (req, res) => {
    
    Topic.find().then(result=>{
        //res.send(result)
        res.render('index' , {Topic:result , nav : 'Study page',  navlink : '/study' });
    }).catch(err => console.log(err))
})
app.get('/study' , (req , res) => {
    
   //res.sendFile('./Views/study.html', {root:__dirname})
   res.render('study' , {title2 : 'Lets Study' , nav : 'Home page' , navlink : '/index'});
});
app.post('/topic' , (req , res) => {
    console.log(req.body)
    const topic = Topic(req.body);
    topic.save().then(() => {
        res.redirect('/get-topic')
    }).catch(err => console.log(err))
 })

app.get('/topic/:id' , (req , res) => {
    //console.log(req.params)
    const id = req.params.id ;
    Topic.findById(id).then(result => {
        console.log('result' , result);
        res.render('topic-detail' , {topic : result , nav : 'Study Page' ,  navlink : '/study'})
    })
})
app.delete('/topic/:id' , (req , res) => {
    //console.log(req.params)
    const id = req.params.id ;
    Topic.findByIdAndDelete(id).then(result => {
        //console.log('result' , result);
        res.json({redirect : '/get-topic'})
        //res.render('topic-detail' , {topic : result , nav : 'Study Page' ,  navlink : '/study'})
    })
})

app.put('/topic/:id' , (req , res) => {
    //console.log(req.params)
    const id = req.params.id ;
    Topic.findByIdAndUpdate(id , req.body).then(result => {
        //console.log('result' , result);
       // res.json({redirect : '/get-topic'})
       res.json({msg : 'Successfully Updated'}) 
       //res.render('topic-detail' , {topic : result , nav : 'Study Page' ,  navlink : '/study'})
    })
})

/*app.get('/topic/study' , (req, res) => {
    res.redirect('/');
})*/
 
app.use((req , res) => {
    
    //res.sendFile('./Views/404.html', {root:__dirname})
    res.render('404' , {title3 : 'Error Occured' , nav : 'Home page' , navlink : '/'});
});


