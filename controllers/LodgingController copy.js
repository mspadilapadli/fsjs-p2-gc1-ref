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

    static async getRoomById(req, res, next) {
        try {
            const { id } = req.params;
            const room = await Lodging.findByPk(id);
            if (!room) throw { name: "NotFound" };

            res.status(200).json(room);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = LodgingController;
