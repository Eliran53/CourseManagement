const jwt = require("jsonwebtoken");
const config = require("../config/auth.js");
const db = require("../modules");
const { log } = require("debug");
const Instructor = db.instructor;
const Role = db.role;

verifyToken = (req, res, next) => {
  //   let authHeader = req.headers["authorization"];
  //   const token = authHeader && authHeader.split(" ")[1];
  const token = req.cookies.token;
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    req.name = decoded.name;
    next();
  });
};

isAdmin = async (req, res, next) => {
  try {
    const instructor = await Instructor.findById({ _id: req.userId }).exec();
    const role = await Role.findById({ _id: instructor.role_id }).exec();

    if (role.role_name === "admin") {
      next();
      return;
    }

    res.status(403).send({ message: "Require Admin Role!" });
    return;
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};

isInstructor = async (req, res, next) => {
  try {
    const instructor = await Instructor.findById({ _id: req.userId }).exec();
    const role = await Role.findById({ _id: instructor.role_id }).exec();

    if (role.role_name === "instructor") {
      next();
      return;
    }

    res.status(403).send({ message: "Require instructor Role!" });
    return;
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};

const authJwt = {
  verifyToken,
  isAdmin,
  isInstructor,
};
module.exports = authJwt;
