const mongoose = require("mongoose");
const validator = require("validator");

const schema = mongoose.Schema;

const contactus = new schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      // unique: true,
      lowercase: true,
      validate: (value) => {
        if (!validator.isEmail(value)) {
          throw new Error({ error: "Invalid Email address" });
        }
      },
    },
    subject: { type: String, required: true },
    message:{type:String,maxlength:200,required: true}
})

module.exports = mongoose.model("contactus", contactus);