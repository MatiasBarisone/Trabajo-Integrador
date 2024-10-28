const { DataTypes } = require("sequelize");
const sequelize = require("../conexion/database");

// Definición del modelo 'generos' que representa los géneros en la base de datos
const generos = sequelize.define(
  "generos",
  {
    // Definición de la columna 'genero_id', que actúa como clave primaria y se autoincrementa
    genero_id: {
      type: DataTypes.INTEGER,
      primaryKey: true, // Es la clave primaria del modelo
      autoIncrement: true, // Se autoincrementa para cada nuevo género
    },
    // Definición de la columna 'nombre' que almacena el nombre del género
    nombre: {
      type: DataTypes.STRING, // Tipo de dato cadena de texto
      allowNull: false, // Este campo es obligatorio (no puede ser nulo)
    },
  },
  {
    tableName: "generos", // Nombre de la tabla en la base de datos
    timestamps: false, // Se desactiva la creación automática de campos 'createdAt' y 'updatedAt'
  }
);

module.exports = generos; // Exportamos el modelo para usarlo en otras partes del proyecto
