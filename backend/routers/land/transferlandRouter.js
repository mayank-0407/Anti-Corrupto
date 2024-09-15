const router = require("express").Router();
const transferLandController = require("../../controllers/land/transferlandController");
const requireSession = require("../../middlewares/requireSession");

router.post("/create", requireSession, transferLandController.createTransferLand);
router.get("/all", requireSession, transferLandController.getAllTransferLands);
router.get("/:id", requireSession, transferLandController.getTransferLandById);
router.get("/user/:userId", requireSession, transferLandController.getTransferLandsByUser);

module.exports = router;
