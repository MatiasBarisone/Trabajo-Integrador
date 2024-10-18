const { DataTypes } = require('sequelize')
//conexion db
const sequelize = require('../conexion/database')


//inicializamos producciones y definimos su contenido
const producciones = sequelize.define('producciones', {
id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  resumen: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  temporadas:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  poster: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  trailer:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoria_id:{
    type: DataTypes.INTEGER,
    references: {
      model: 'categorias',
      key: 'id'
    },
    allowNull: false,
  }




}, {
  tableName:'producciones',
    timestamps: false,
})

module.exports = producciones;