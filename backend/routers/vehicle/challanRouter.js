const express = require("express");
const router = express.Router();
const challanController = require("../../controllers/vehicle/challanController");
const requireSession = require("../../middlewares/requireSession");
const requireRole = require("../../middlewares/requireRole");

router.post("/add", requireSession, requireRole("POLICE"), challanController.createChallan);
router.get("/view", requireSession, challanController.getAllChallans);
router.get("/view/:id", requireSession, challanController.getChallanById);
router.put("/:id", requireSession, requireRole("POLICE"), challanController.updateChallan);
router.delete("/:id", requireSession, requireRole("POLICE"), challanController.deleteChallan);

module.exports = router;
