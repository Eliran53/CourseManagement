const mongoose = require("mongoose");
const ObjectId = require('mongoose').Types.ObjectId;
const validator = require("validator");
const bcrypt = require("bcryptjs");
const schema = mongoose.Schema;

const instructor = new schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
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
    password: { type: String, required: true },
    phone: { type: String },
    role_id: { type: ObjectId, required: true,ref: "roles" },
    education: { type: String, required: true },
    linkdin: { type: String },
    bio: { type: String},
    role_id: { type: ObjectId ,required: true },
    subject_id: [{ type:ObjectId, required: true }],
    education: { type: String, required: true },
    
   
  },
  { timestamps: true }
);
instructor.virtual('lectures', {
  ref: 'lecture', 
  localField: '_id', 
  foreignField: 'instructorID', 

});
instructor.pre("save", async function (next) {
  // Hash the password before saving the user model
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password,8);
  }
  next();
});

module.exports = mongoose.model("instructors", instructor);
