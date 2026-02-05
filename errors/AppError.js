class AppError extends Error {
    constructor(name, message, status, errors = null) {
        super(message);
        this.name = name;
        this.status = status;
        this.errors = errors;

        Error.captureStackTrace(this, this.constructor);
    }
}
module.exports = AppError;
