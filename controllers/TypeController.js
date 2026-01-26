const { Type } = require("../models");
class TypeController {
    static async postType(req, res, next) {
        try {
            const type = await Type.create(req.body);
            res.status(201).json({
                message: `new type ${type.name} created `,
                type,
            });
        } catch (error) {
            next(error);
        }
    }
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
