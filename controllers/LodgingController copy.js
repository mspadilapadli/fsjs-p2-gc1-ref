const { Lodging } = require("../models");
class LodgingController {
    static async getLodgings(req, res, next) {
        try {
            const rooms = await Lodging.findAll();
            res.status(200).json(rooms);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = LodgingController;
