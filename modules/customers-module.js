const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const schema = mongoose.Schema
const ObjectId = require('mongoose').Types.ObjectId;
const customer = new schema(
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
    role_id:{ type: ObjectId,ref: 'role',required:true},
    lecture_id:[{ type: ObjectId }],
    payment:[{type:String}]
    },
    {timestamps:true},
    

)


customer.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

module.exports = mongoose.model("customer", customer)