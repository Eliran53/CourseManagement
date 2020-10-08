const mongoose = require('mongoose')
const schema = mongoose.Schema

const subject = new schema(
    {
        subject_name:{type:String,required:true},

    }
    )
    subject.virtual('lectures', {
        ref: 'lecture', 
        localField: '_id', 
        foreignField: 'subjectID', 
      
       
    });

    module.exports = mongoose.model('subjects',subject)