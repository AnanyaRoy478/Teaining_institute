const mongoose=require('mongoose')

const courseSchema = new mongoose.Schema({
    image : String,
    name : {
        type: String,
        required : true
    },
    desc : {
        type: String,
        required : true
    },
    amount : {
        type: String,
        required : true
    },
    duration : {
        type: String,
        required : true
    },
},{versionKey: false})

const courseModel= mongoose.model("course",courseSchema);
module.exports = courseModel;