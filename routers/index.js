const router = require("express").Router();

router.use("/public", require("./lodging.pub.routes")); // Public routes
router.use("/lodgings", require("./lodging.routes"));
router.use("/types", require("./type.routes"));
router.use("/users", require("./user.routes"));
module.exports = router;
