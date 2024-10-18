const { DataTypes } = require('sequelize')
const sequelize = require('../conexion/database')
const Producciones = require('../models/producciones');
const Reparto = require('../models/reparto')


const produccion_reparto = sequelize.define('produccion_reparto', {
produccion_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Producciones,
        key:'id'
    },
    allowNull: false,
  },
  reparto_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Reparto,
        key:'id'
    }
  }
}, {
    tableName: 'produccion_reparto',
    timestamps: false,
})

Producciones.belongsToMany(Reparto, {through: produccion_reparto, foreignKey: 'produccion_id'});
Reparto.belongsToMany(Producciones, {through: produccion_reparto, foreignKey: 'reparto_id'});

module.exports = produccion_reparto;