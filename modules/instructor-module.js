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
    phone: { type: String, required: true },
    role_id: { type: String, required: true },
    subject_id: [{ type: String, required: true }],
    education: { type: String, required: true },
    linkdin: { type: String, required: true },
    bio: { type: String, required: true },
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
