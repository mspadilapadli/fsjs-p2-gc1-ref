const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Type routes");
});

module.exports = router;
