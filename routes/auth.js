const authJwt = require('../middleware/authJwt')
const authcontroller = require("../controllers/auth");
const config = require("../config/auth.js");
const jwt = require("jsonwebtoken");
const express = require("express");
var app = express();

const csrf = require("csurf");

const router = express.Router();

const csrfProtection = csrf({
  cookie: true,
});

app.use(csrfProtection);

router.post("/signup", authcontroller.signup);
router.post("/signin", authcontroller.signin);
router.get("/payload",[authJwt.verifyToken], (req, res,next) => {

  return res.status(200).send({ data: {name:req.name} });
});


router.get("/csrf-token", (req, res) => { 
  res.json({ csrfToken: req.csrfToken() });
});
module.exports = router;
