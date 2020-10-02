const mongoose = require("mongoose");
const schema = mongoose.Schema
const Customer = new schema(
    {
    first_Name:{type:String,required:true},
    last_Name :{type:String,required:true},
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
          if (!validator.isEmail(value)) {
            throw new Error({ error: "Invalid Email address" });
          }
        },
      },
    password:{type:String,required:true},
    username:{type:String,required:true},
    role_id:{type:String, required:true},
    lecture_id:[{type:String}],
    payment:[{type:String}]
    },
    {timestamps:true},
    

)
module.exports = mongoose.model("customer", Customer)