const router = require("express").Router();
const landController = require("../controllers/landController");

router.post("/create", landController.createLand);
router.get("/all", landController.getAllLands);
router.get("/:id", landController.getLandByownerId);
router.get("/land/:id", landController.getLandById);
// router.patch("/:id", landController.updateLand);
// router.delete("/:id", landController.deleteLand);

module.exports = router;