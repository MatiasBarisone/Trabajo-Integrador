const { DataTypes } = require('sequelize')
const sequelize = require('../conexion/database')

const generos = sequelize.define('generos', {
id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName:'generos',
    timestamps: false,
})

module.exports = generos;