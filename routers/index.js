const router = require("express").Router();

router.use("/types", require("./type.routes"));
router.use("/lodgings", require("./lodgings.routes"));
router.use("/users", require("./user.routes"));
module.exports = router;
