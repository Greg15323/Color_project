const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Color extends Model {}

Color.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        favorite_color_ave: {
            type: DataTypes.DECIMAL,
        },
        least_favorite_color_ave: {
            type: DataTypes.DECIMAL,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "color"
    }
);

module.exports = Color;