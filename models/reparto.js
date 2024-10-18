const { DataTypes } = require('sequelize')
const sequelize = require('../conexion/database')

const reparto = sequelize.define('reparto', {
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
  tableName: 'reparto',
    timestamps: false,
})

module.exports = reparto;