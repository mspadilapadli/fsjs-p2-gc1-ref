"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Lodging extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Lodging.belongsTo(models.User, { foreignKey: "authorId" });
            Lodging.belongsTo(models.Type, { foreignKey: "typeId" });
        }
    }
    Lodging.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: `name is required`,
                    },
                    notNull: {
                        msg: `name is required`,
                    },
                },
            },
            facility: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: `facility is required`,
                    },
                    notNull: {
                        msg: `facility is required`,
                    },
                },
            },
            roomCapacity: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: `room capacity is required`,
                    },
                    notNull: {
                        msg: `room capacity is required`,
                    },
                },
            },
            imgUrl: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: `imgUrl is required`,
                    },
                    notNull: {
                        msg: `imgUrl is required`,
                    },
                    isUrl: {
                        args: true,
                        msg: `Please input url format`,
                    },
                },
            },
            location: DataTypes.STRING,
            price: DataTypes.INTEGER,
            typeId: DataTypes.INTEGER,
            authorId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Lodging",
        },
    );
    return Lodging;
};
