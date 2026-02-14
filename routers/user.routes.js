const router = require("express").Router();
const UserController = require("../controllers/UserController");

router.post(
    "/add-user",
    // authentication,
    // adminAuthorize,
    UserController.register,
);

router.post("/login", UserController.login);
module.exports = router;
