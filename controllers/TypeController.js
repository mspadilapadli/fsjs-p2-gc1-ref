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

    static async putType(req, res, next) {
        try {
            const { id } = req.params;
            const type = await Type.findByPk(id);
            if (!type) throw { name: "NotFound" };
            await Type.update(req.body, {
                where: { id },
            });
            let updated = await Type.findByPk(id);

            res.status(200).json({
                message: `${type.name} has been updated `,
                updated,
            });
        } catch (error) {
            next(error);
        }
    }

    static async deleteType(req, res, next) {
        try {
            const { id } = req.params;
            const type = await Type.findByPk(id);
            if (!type) throw { name: "NotFound" };
            await Type.destroy({
                where: { id },
            });

            res.status(200).json({
                message: `${type.name} success to delete `,
            });
        } catch (error) {
            next(error);
        }
    }
}
module.exports = TypeController;
