const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models");

class UserController {
    static async register(req, res, next) {
        try {
            // console.log(req.body);
            let user = await User.create(req.body);
            // console.log(user);

            res.status(201).json(user);
            // res.status(201).json({ message: ` has been created` });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UserController;
