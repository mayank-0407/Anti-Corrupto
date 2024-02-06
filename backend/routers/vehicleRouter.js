const router = require("express").Router();
const vehicleController = require("../controllers/vehicleController");

router.post("/vehicles", vehicleController.createVehicle);
router.get("/vehicles", vehicleController.getAllVehicles);
router.get("/vehicles/:id", vehicleController.getVehicleById);
router.put("/vehicles/:id", vehicleController.updateVehicle);
router.delete("/vehicles/:id", vehicleController.deleteVehicle);
router.delete("/vehicles/:id", vehicleController.updatePollutionDone);

module.exports = router;
