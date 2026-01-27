"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.hasMany(models.Lodging, { foreignKey: "authorId" });
        }
    }
    User.init(
        {
            username: DataTypes.STRING,
            email: DataTypes.STRING,
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: `password is required`,
                    },
                    notNull: {
                        msg: `password is required`,
                    },
                    minLength(value) {
                        if (value.length < 5) {
                            throw new Error(`Minimum password character is 5`);
                        }
                    },
                },
            },
            role: DataTypes.STRING,
            phoneNumber: DataTypes.STRING,
            address: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "User",
            hooks: {
                beforeCreate(user, option) {
                    // console.log(user.password);
                    user.password = hashPassword(user.password);
                },
            },
        },
    );
    return User;
};
