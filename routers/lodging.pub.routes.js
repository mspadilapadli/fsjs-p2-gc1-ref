const router = require("express").Router();

router.get("/lodgings", LodgingController.getAllRooms); //public
router.get("/lodgings/:id", LodgingController.getRoomById); //public

module.exports = router;
