const router = require("express").Router();
const vehicleController = require("../../controllers/vehicle/vehicleController");
const requireSession = require("../../middlewares/requireSession");
const requireRole = require("../../middlewares/requireRole");

router.post("/add", requireSession, requireRole("ADMIN"), vehicleController.createVehicle);
router.get("/view", requireSession, vehicleController.getAllVehicles);
router.get("/view/all/:id", requireSession, vehicleController.getVehicleById);
router.get("/view/:id", requireSession, vehicleController.getVehicleByUserId);
router.post("/update/:id", requireSession, requireRole("ADMIN"), vehicleController.updateVehicle);
router.post("/delete/:id", requireSession, requireRole("ADMIN"), vehicleController.deleteVehicle);
router.post("/update/pollution/:id", requireSession, requireRole("POLICE"), vehicleController.updatePollutionDone);

module.exports = router;
