const TypeController = require("../controllers/typeController");

const router = require("express").Router();

router.get("/", TypeController.getTypes);

module.exports = router;
