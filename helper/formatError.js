const formateSequelizeValidationError = (error) => {
    const errors = {};
    error.errors.forEach((err) => {
        errors[err.path] = err.message;
    });
    return errors;
};

module.exports = formateSequelizeValidationError;
