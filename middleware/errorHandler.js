const formateSequelizeError = require("../helper/formatError");

const errorHandler = (error, req, res, next) => {
    let code = error.name || "INTERNAL_SERVER_ERROR";
    let message = error.message || "Internal Server Error";
    let status = error.status || 500;
    let errors;

    if (
        error.name === "SequelizeValidationError" ||
        error.name === "SequelizeUniqueConstraintError"
    ) {
        code = "BAD_REQUEST";
        message = "Validation Error";
        errors = formateSequelizeError(error);
        status = 400;
    }

    const response = { code, message };
    if (errors) {
        response.errors = errors;
    }

    res.status(status).json(response);
};

module.exports = errorHandler;
