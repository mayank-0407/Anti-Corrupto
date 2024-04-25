const router = require("express").Router();
const transferLandController = require("../controllers/transferlandController");

router.post("/create", transferLandController.createTransferLand);
router.get("/all", transferLandController.getAllTransferLands);
router.get("/:id", transferLandController.getTransferLandById);
router.get("/user/:userId", transferLandController.getTransferLandsByUser);

module.exports = router;
