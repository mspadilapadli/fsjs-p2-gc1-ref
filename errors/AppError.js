class AppError extends Error {
    constructor(name, message, status) {
        super(message);
        this.name = name;
        this.status = status;

        Error.captureStackTrace(this, this.constructor);
    }
}
module.exports = AppError;
