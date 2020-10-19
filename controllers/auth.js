const config = require("../config/auth");
const db = require("../modules");
const role_ctrl = require("./role-ctrl");
const instructor_ctrl = require("./instructor-ctrl");
const customer_ctrl = require("./customers-ctrl");
const Instructor = db.instructor;
const Customer = db.customer;



const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { log } = require("debug");

signup = async (req, res) => {
  const instructors = await Instructor.find({ email: req.body.email }).exec();
  const customers = await Customer.find({ email: req.body.email }).exec();
  if (instructors && customers) {
    console.log("email already exist");
    return res.status(400).json({
      error,
      message: "email already exist",
    });
  }
  const role = await role_ctrl.getRoleNameById(req.body.role_id);
const { NotExtended } = require("http-errors");

signup = async (req, res) => {
  console.log("REQ-BODY", req.body);
  let role;
  try {
    role = await role_ctrl.getRoleNameById(req.body.role_id);
    if (!role) {
      return res.status(400).json({ success: false, error: "role is not exist" });
    }
  }
  catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error });
  }
  if (role === "instructor") {
    instructor_ctrl.createInstructor(req, res);
  }
  if (role === "customer") {
    customer_ctrl.createCustomer(req, res);
  }
  const token = jwt.sign({ id: user.id}, config.secret, {
    expiresIn: 3600, //  hour in sec
  });
  res.cookie("token", token, { httpOnly: true });

  }
};



signin = async (req, res) => {
  const user = await instructor_ctrl.checkAuthentication(req, res);
  console.log(user,"e")
  const role = await role_ctrl.getRoleNameById(user.role_id);
  const token = jwt.sign(
    { id: user.id},
    config.secret,
    {
      expiresIn: 3600, //  hour in sec
    }
  );
  res.cookie("token", token, { httpOnly: true });
  // const token = jwt.sign({ id: user.id }, config.secret, {

  //   expiresIn: 3600, //  hour in sec

  // });
  res.status(200).send({
    id: user._id,
    email: user.email,
    roles: role,
    accessToken: token,
  });
};
module.exports = { signup, signin };





