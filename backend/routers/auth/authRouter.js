const router = require("express").Router();
const authController = require("../../controllers/auth/authController");
const requireSession = require("../../middlewares/requireSession");

router.post("/signup", authController.signUpController);
router.post("/login", authController.loginController);
router.get("/refresh", authController.refreshAccessTokenController);

// Require a valid session to logout
router.post("/logout", requireSession, authController.logOutController);

// Session validation routes
router.get("/verifysession/:id", authController.checkValidSession);
router.get("/getuser/:id", requireSession, authController.getUserDetails);

module.exports = router;
