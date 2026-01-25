const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Lodging public routes");
});

module.exports = router;
