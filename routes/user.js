const { authJwt } = require("../middleware");
const controller = require("../controllers/user");
const express = require("express");

const router = express.Router();

router.get("/api/test/all", controller.allAccess);
router.get("/user", [authJwt.verifyToken], controller.userBoard);
router.get(  "/api/test/inst",  [authJwt.verifyToken, authJwt.isInstructor], controller.moderatorBoard);
router.get( "/api/test/admin",[authJwt.verifyToken, authJwt.isAdmin],controller.adminBoard);
module.exports = router;

