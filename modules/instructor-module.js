const mongoose = require('mongoose')
const schema = mongoose.Schema

const instructor = new schema(
    {
        first_name:{type:String,required:true},
        last_name:{type:String,required:true},
        email:{type:String,required:true},
        password:{type:String,required:true},
        phone:{type:String,required:true},
        role_id:{type:String,required:true},
        subject_id:{type:String,required:true},
        education:{type:String,required:true},
        subject_id:{type:String,required:true},
        linkdin:{type:String,required:true},
        bio:{type:String,required:true},
    },
    {timestamps: true},
    )

    module.exports = mongoose.model('instructors',instructor)

