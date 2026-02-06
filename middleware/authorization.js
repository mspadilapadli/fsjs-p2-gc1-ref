const { Lodging } = require("../models");

const authorization = async (req, res, next) => {
    try {
        if (req.user.role === `admin`) {
            next();
        } else if (req.user.role === `Staff`) {
            let room = await Lodging.findByPk(req.params.id);

            if (!room) throw { name: "NotFound" };

            if (room.authorId !== req.user.id) throw { name: `Forbidden` };

            next();
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { authorization, adminAuthorize };
