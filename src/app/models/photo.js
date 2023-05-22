const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Photo extends Model {}

Photo.init({
    idPhoto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    lienPhoto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codePro: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'photo'
});

module.exports = Photo;