const AppError = require("../errors/AppError");
const { User } = require("../models");
class UserController {
    static async register(req, res, next) {
        try {
            const { username, email, password, phoneNumber, address } =
                req.body;

            await User.create({
                username,
                email,
                password,
                phoneNumber,
                address,
            });
            res.status(201).json({ message: "User registered successfully" });
        } catch (error) {
            next(error);
        }
    }
    static async login(req, res, next) {
        try {
            const { email, password } = req.body;
            if (!email || !password)
                throw new AppError(
                    "InvalidInput",
                    "Email and password are required",
                    400,
                );
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}

module.exports = UserController;
