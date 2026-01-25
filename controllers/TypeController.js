const { Type } = require("../models");
class TypeController {
    static async getTypes(req, res, next) {
        try {
            const types = await Type.findAll();
            res.status(200).json(types);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}
module.exports = TypeController;
