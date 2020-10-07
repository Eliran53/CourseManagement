const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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
    role_id: { type: mongoose.Schema.Types.ObjectId, required: true,ref: "roles" },
    subjects: [
        {
          type: mongoose.Schema.Types.ObjectId,
          required:true,
          ref: "subject"
        }
      ],
    education: { type: String, required: true },
    linkdin: { type: String },
    bio: { type: String},
  },
  { timestamps: true }
);
instructor.pre("save", async function (next) {
  // Hash the password before saving the user model
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

module.exports = mongoose.model("instructors", instructor);
