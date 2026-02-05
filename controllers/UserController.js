const AppError = require("../errors/AppError");
const { comparePassword } = require("../helper/bcrypt");
const { createToken } = require("../helper/jwt");
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
                    "INVALID_INPUT",
                    "Email and password are required",
                    400,
                );

            const user = await User.findOne({ where: { email } });
            if (!user) throw new AppError("INVALID_USER", "Invalid email", 401);

            const isPasswordValid = await comparePassword(
                password,
                user.password,
            );
            if (!isPasswordValid)
                throw new AppError("INVALID_USER", "Invalid password", 401);

            const access_token = createToken({
                id: user.id,
            });
            res.status(200).json({ access_token });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UserController;
