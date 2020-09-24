const mongoose = require('mongoose')
const schema = mongoose.Schema

const role = new schema(
    {
        role_name:{type:String,required:true},

    },
    {timestamps: true},
    )

    module.exports = mongoose.model('roles',role)

