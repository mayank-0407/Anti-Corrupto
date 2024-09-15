const router = require("express").Router();
const landController = require("../../controllers/land/landController");
const requireSession = require("../../middlewares/requireSession");
const requireRole = require("../../middlewares/requireRole");

router.post("/create", requireSession, requireRole("ADMIN"), landController.createLand);
router.get("/all", requireSession, landController.getAllLands);
router.get("/:id", requireSession, landController.getLandByownerId);
router.get("/land/:id", requireSession, landController.getLandById);

module.exports = router;
