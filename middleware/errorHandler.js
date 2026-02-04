const formateSequelizeValidationError = require("../helper/formatError");

const errorHandler = (error, req, res, next) => {
    let code = error.name || "INTERNAL_SERVER_ERROR";
    let message = error.message || "Internal Server Error";
    let status = error.status || 500;

    if (error.name === "SequelizeValidationError") {
        code = "BAD_REQUEST";
        message = formateSequelizeValidationError(error);
        status = 400;
    }
    if (error.name === "SequelizeUniqueConstraintError") {
        code = "BAD_REQUEST";
        message = error.errors.map((err) => err.message);
        status = 400;
    }

    res.status(status).json({ code, message });
};

module.exports = errorHandler;
