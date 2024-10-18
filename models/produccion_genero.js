const { DataTypes } = require('sequelize')
const sequelize = require('../conexion/database')
const Producciones = require('../models/producciones');
const Generos = require('../models/generos');


const produccion_genero = sequelize.define('produccion_genero', {
produccion_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Producciones,
        key:'id'
    },
    allowNull: false,
  },
  genero_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Generos,
        key:'id'
    }
    
  }
}, {
    tableName: 'produccion_genero',
    timestamps: false,
})

Producciones.belongsToMany(Generos, {through: produccion_genero, foreignKey: 'produccion_id'});
Generos.belongsToMany(Producciones, {through: produccion_genero, foreignKey: 'genero_id'});

module.exports = produccion_genero;