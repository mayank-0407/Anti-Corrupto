const router = require("express").Router();
const landCaseController = require("../controllers/landcaseController");

router.post("/create", landCaseController.createLandCase);
router.get("/all", landCaseController.getAllLandCases);
router.get("/:id", landCaseController.getLandCaseById);
router.get("/user/:userId", landCaseController.getLandCasesByUser);

module.exports = router;
