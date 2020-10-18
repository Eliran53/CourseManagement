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
router.get("/payload", (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    userId = decoded.id;
    res.json({ userId });
  });
});

router.get("/csrf-token", (req, res) => { 
  res.json({ csrfToken: req.csrfToken() });
});
module.exports = router;
// module.exports = function (app) {
//   app.use(function (req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "x-access-token, Origin, Content-Type, Accept"
//     );
//     next();
//   });

// app.post("/api/auth/signup", authcontroller.signup);

// app.post("/api/auth/signin", authcontroller.signin);
// };
