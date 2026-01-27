const router = require("express").Router();
const UserController = require("../controllers/UserController");
const { adminAuthorize } = require("../middlewares/authorization");
const authentication = require("../middlewares/authenticate");

router.post(
    "/add-user",
    authentication,
    adminAuthorize,
    UserController.register,
);

router.post("/login", UserController.login);
module.exports = router;
