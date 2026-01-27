const LodgingController = require("../controllers/LodgingController copy");
const router = require("express").Router();

router.get("/", LodgingController.getLodgings);

router.use(authentication);

router.post("/", LodgingController.postRoom);

router.get("/", LodgingController.getAllRoomsUser);

router.get("/:id", LodgingController.getRoomById);

router.put("/:id", authorization, LodgingController.putRoom);

router.patch(
    "/:id/imgUrl",
    authorization,
    upload.single("imgUrl"),
    LodgingController.patchImgUrl,
);

router.delete("/:id", authorization, LodgingController.deleteRoom);
module.exports = router;
