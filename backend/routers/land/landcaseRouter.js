const router = require("express").Router();
const landCaseController = require("../../controllers/land/landcaseController");
const requireSession = require("../../middlewares/requireSession");
const requireRole = require("../../middlewares/requireRole");

// router.post("/create", requireSession, requireRole("ADMIN"), landCaseController.createLandCase);
router.post("/create", landCaseController.createLandCase);
router.get("/all", requireSession, landCaseController.getAllLandCases);
router.get("/:id", requireSession, landCaseController.getLandCaseById);
router.get("/user/:userId", requireSession, landCaseController.getLandCasesByUser);

module.exports = router;
