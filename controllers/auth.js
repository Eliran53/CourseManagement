const config = require("../config/auth");
const db = require("../modules");
const role_ctrl = require("./role-ctrl");
const instructor_ctrl = require("./instructor-ctrl");
const customer_ctrl = require("./customers-ctrl");
const Instructor = db.instructor;
const Customer = db.customer;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
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
};



signin = async (req, res) => {
  const user = await instructor_ctrl.checkAuthentication(req, res);
  console.log(user,"e")
  const role = await role_ctrl.getRoleNameById(user.role_id);
  const token = jwt.sign({ id: user.id }, config.secret, {
    expiresIn: 3600, //  hour
    
  });
  res.status(200).send({
    id: user._id,
    username: user.username,
    email: user.email,
    roles: role,
    accessToken: token,
  });
};
module.exports = { signup, signin };
