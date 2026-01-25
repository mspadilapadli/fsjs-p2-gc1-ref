const LodgingController = require("../controllers/LodgingController copy");

const router = require("express").Router();

router.get("/", LodgingController.getLodgings);
module.exports = router;
