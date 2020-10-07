const authcontroller = require("../controllers/auth");
const express = require('express');

const router = express.Router();


router.post("/api/auth/signup", authcontroller.signup);
router.post("/api/auth/signin", authcontroller.signin);
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
