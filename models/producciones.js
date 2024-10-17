const sequelize = require('../conexion/database');
const { DataTypes } = require('sequelize');

const Producciones = sequelize.define('Producciones', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    titulo: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    resumen: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    temporadas: {
        type: DataTypes.INTEGER,
    },
    poster: {
        type: DataTypes.STRING(255),
    },
    trailer: {
        type: DataTypes.STRING(255),
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'categorias', // Asegúrate de que esta tabla existe
            key: 'id',
        },
    },
}, {
  tableName: 'producciones',
  timestamps: false
});

module.exports = Producciones;
