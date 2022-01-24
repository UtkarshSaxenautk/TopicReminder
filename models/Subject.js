const mongoose = require('mongoose')

const Schema = mongoose.Schema ;

const Subjectschema = new Schema({
    name:{
        type:String,
        required:true
    },
    topicname:{
        type:String,
        required:true
    }
}, {timestamps:true});


const Topic = mongoose.model('Topic' , Subjectschema)

module.exports = Topic;