const TypeController = require("../controllers/typeController");

const router = require("express").Router();

router.post("/", TypeController.postType);

router.get("/", TypeController.getTypes);

router.put("/:id", TypeController.putType);

router.delete("/:id", TypeController.deleteType);

module.exports = router;
