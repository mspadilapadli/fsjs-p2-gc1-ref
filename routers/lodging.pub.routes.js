const router = require("express").Router();
const LodgingController = require("../controllers/LodgingController");

router.get("/lodgings", LodgingController.getAllRooms); //public
router.get("/lodgings/:id", LodgingController.getRoomById); //public

module.exports = router;
