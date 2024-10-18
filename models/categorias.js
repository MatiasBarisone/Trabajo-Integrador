const { DataTypes } = require('sequelize')
const sequelize = require('../conexion/database')

const categorias = sequelize.define('categorias', {
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
  tableName:'categorias',
    timestamps: false,
})

module.exports = categorias;