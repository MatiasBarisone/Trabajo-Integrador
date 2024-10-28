const { DataTypes } = require("sequelize");
const sequelize = require("../conexion/database"); // Importar la conexión a la base de datos

// Definición del modelo 'reparto' que representa la tabla 'reparto'
const reparto = sequelize.define(
  "reparto",
  {
    reparto_id: {
      type: DataTypes.INTEGER, // Tipo de dato para el ID del reparto
      primaryKey: true, // Este campo es la clave primaria
      autoIncrement: true, // El valor se incrementa automáticamente
    },
    nombre: {
      type: DataTypes.STRING, // Tipo de dato para el nombre del reparto
      allowNull: false, // Este campo no puede ser nulo
    },
  },
  {
    tableName: "reparto", // Nombre de la tabla en la base de datos
    timestamps: false, // No se crean los campos automáticos 'createdAt' y 'updatedAt'
  }
);

module.exports = reparto; // Exportar el modelo para usarlo en otras partes del proyecto
