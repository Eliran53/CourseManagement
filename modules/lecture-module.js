const mongoose = require("mongoose");
var ObjectId = require('mongoose').Types.ObjectId;
const schema = mongoose.Schema
const lecture = new schema(
    {
    instructorID:{type:String},
    lectureName:{type:String},
    subjectID :{type:ObjectId,required:true},
    duration:{type:String,required:true},
    maxCapacityParticipants:{type:Number,required:true},
    uploadDate:{type:Date,default: Date.now(),required:true},
    lectureDate:{type:Date,required:true},
    summery:{type:String,required:true},
    price:{type:Number, required:true},
    language:{type:String, required:true},
    rank:{type:String},
    recommended:{type:String},
    videos:{type:String, required:true},
    customerID:[{type:String}]
    },
    {timestamps:true},
    
)
module.exports = mongoose.model("lecture", lecture)