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
        fav_red_ave: {
            type: DataTypes.DECIMAL,
        },
        fav_green_ave: {
            type: DataTypes.DECIMAL,
        },
        fav_blue_ave: {
            type: DataTypes.DECIMAL,
        },
        least_fav_red_ave: {
            type: DataTypes.DECIMAL,
        },
        least_fav_green_ave: {
            type: DataTypes.DECIMAL,
        },
        least_fav_blue_ave: {
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