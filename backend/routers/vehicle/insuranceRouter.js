const express = require("express");
const router = express.Router();
const insuranceController = require("../../controllers/vehicle/insuranceController");
const requireSession = require("../../middlewares/requireSession");

router.post("/insurances", requireSession, insuranceController.createInsurance);
router.get("/insurances", requireSession, insuranceController.getAllInsurances);
router.get("/insurances/:id", requireSession, insuranceController.getInsuranceById);
router.put("/insurances/:id", requireSession, insuranceController.updateInsurance);
router.delete("/insurances/:id", requireSession, insuranceController.deleteInsurance);

module.exports = router;
