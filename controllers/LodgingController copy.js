const { Lodging } = require("../models");
class LodgingController {
    static async postRoom(req, res, next) {
        try {
            let {
                name,
                facility,
                roomCapacity,
                imgUrl,
                location,
                price,
                typeId,
            } = req.body;
            const rooms = await Lodging.create({
                name,
                facility,
                roomCapacity,
                imgUrl,
                location,
                price,
                typeId,
                authorId: req.user.id,
            });
            res.status(201).json({
                message: `new item ${rooms.name} created `,
                rooms,
            });
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    static async getAllRooms(req, res) {
        try {
            const { search, filter, sort, page } = req.query;

            let option = {};
            option.where = {};

            // * search
            if (search) {
                option.where.name = {
                    [Op.iLike]: `%${search}%`,
                };
            }

            // * Filtering
            if (filter) {
                option.where.typeId = filter;
            }

            //* sorting
            if (sort) {
                const ordering = sort[0] === "-" ? `DESC` : `ASC`;
                const orderByColom = ordering === `DESC` ? sort.slice(1) : sort;
                option.order = [[orderByColom, ordering]];
            }

            // *pagination
            let limit = 10;
            let pageNumber = 1;
            if (page) {
                if (page.size) {
                    limit = page.size;
                    option.limit = limit;
                } else {
                    option.limit = limit;
                }
                if (page.number) {
                    pageNumber = page.number;
                    option.offset = limit * (pageNumber - 1);
                }
            }

            // * meta data
            const { count, rows } = await Lodging.findAndCountAll(option);
            res.status(200).json({
                page: pageNumber,
                data: rows,
                totalData: count,
                totalPage: Math.ceil(count / limit),
                dataPerPage: limit,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: `Internal Server Error` });
        }
    }

    static async getAllRoomsUser(req, res, next) {
        try {
            const rooms = await Lodging.findAll({
                include: {
                    model: User,
                    attributes: {
                        exclude: ["password"],
                    },
                },
            });
            res.status(200).json(rooms);
        } catch (error) {
            next(error);
        }
    }
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
    static async putRoom(req, res, next) {
        try {
            const { id } = req.params;
            const room = await Lodging.findByPk(id);
            if (!room) throw { name: "NotFound" };
            await Lodging.update(req.body, {
                where: { id },
            });
            let updated = await Lodging.findByPk(id);

            res.status(200).json({
                message: `Data with id ${room.id} has been updated`,
                updated,
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = LodgingController;
