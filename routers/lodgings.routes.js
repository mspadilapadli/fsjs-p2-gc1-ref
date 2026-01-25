const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Lodging routes");
});
module.exports = router;
