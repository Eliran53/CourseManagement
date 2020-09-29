const mongoose = require("mongoose");
const validator = require("validator");

const schema = mongoose.Schema;

const contact = new schema(
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
    message:{type:String,maxlength:200,required: true}
})

module.exports = mongoose.model("contacts", contact);