//* async
const { hash, compare } = require("bcryptjs");

module.exports = {
    hashPassword: (password) => hash(password),
    comparePassword: (passwordInput, passwordDB) =>
        compare(passwordInput, passwordDB),
};

//*sync
// const bcrypt = require("bcryptjs");

// let hashPassword = (password) => {
//     const salt = bcrypt.genSaltSync(8);
//     return bcrypt.hashSync(password, salt);
// };
// let comparePassword = (passwordIput, PasswordDB) => {
//     return bcrypt.compareSync(passwordIput, PasswordDB);
// };

// module.exports = { hashPassword, comparePassword };
