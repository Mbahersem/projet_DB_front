const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Facture extends Model {}

Facture.init({
    idFac: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dateFac: {
        type: DataTypes.DATE,
        allowNull: false
    },
    remise: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    montant: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    tel: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'facture'
});

module.exports = Facture;