const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Produit extends Model {}

Produit.init({
    codePro: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    prix: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    qte: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'produit'
});

module.exports = Produit;