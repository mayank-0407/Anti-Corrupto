const router = require("express").Router();
const landController = require("../../controllers/land/landController");
const requireSession = require("../../middlewares/requireSession");
const requireRole = require("../../middlewares/requireRole");

router.post("/create", requireSession, requireRole("ADMIN"), landController.createLand);
router.get("/all", requireSession, landController.getAllLands);
router.get("/:id",  landController.getLandByownerId);
router.get("/land/:id", requireSession, landController.getLandById);
router.post("/add/land/id/indb/:id", requireSession, landController.addLandIdToDB);

module.exports = router;
