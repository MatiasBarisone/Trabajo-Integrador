const { DataTypes } = require("sequelize");
const sequelize = require("../conexion/database");

// Definición del modelo 'categorias' que representa las categorías en la base de datos
const categorias = sequelize.define(
  "categorias",
  {
    // Definición de la columna 'id', que actúa como clave primaria y se autoincrementa
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, // Indicamos que es clave primaria
      autoIncrement: true, // Se autoincrementa para cada nuevo registro
    },
    // Definición de la columna 'nombre' que almacena el nombre de la categoría
    nombre: {
      type: DataTypes.STRING, // Tipo de dato cadena de texto
      allowNull: false, // Este campo es obligatorio (no puede ser nulo)
    },
  },
  {
    tableName: "categorias", // Nombre de la tabla en la base de datos
    timestamps: false, // Desactivamos la creación automática de timestamps (campos 'createdAt' y 'updatedAt')
  }
);

module.exports = categorias; // Exportamos el modelo para usarlo en otras partes del proyecto
