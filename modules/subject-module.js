const mongoose = require('mongoose')
const schema = mongoose.Schema

const subject = new schema(
    {
        subject_name:{type:String,required:true},

    }
    )

    module.exports = mongoose.model('subjects',subject)