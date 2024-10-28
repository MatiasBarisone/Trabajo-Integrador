const { DataTypes } = require("sequelize");
const sequelize = require("../conexion/database"); // Importar la conexión a la base de datos
const Genero = require("../models/generos"); // Importar el modelo de Géneros
const Reparto = require("../models/reparto"); // Importar el modelo de Reparto

// Definición del modelo 'Produccion' que representa la tabla 'producciones'
const Produccion = sequelize.define(
  "Produccion",
  {
    produccion_id: {
      type: DataTypes.INTEGER, // Tipo de dato para el ID de producción
      primaryKey: true, // Este campo es la clave primaria
      autoIncrement: true, // El valor se incrementa automáticamente
    },
    titulo: {
      type: DataTypes.STRING, // Tipo de dato para el título de la producción
      allowNull: false, // Este campo no puede ser nulo
    },
    resumen: {
      type: DataTypes.TEXT, // Tipo de dato para un resumen de la producción
    },
    temporadas: {
      type: DataTypes.INTEGER, // Tipo de dato para el número de temporadas
    },
    duracion: {
      type: DataTypes.STRING, // Tipo de dato para la duración de la producción
    },
    trailer: {
      type: DataTypes.STRING, // Tipo de dato para la URL del tráiler
    },
    poster: {
      type: DataTypes.STRING, // Tipo de dato para la URL del poster
    },
    categoria_id: {
      type: DataTypes.INTEGER, // Tipo de dato para la ID de la categoría
      allowNull: false, // Este campo no puede ser nulo
    },
  },
  {
    tableName: "producciones", // Nombre de la tabla en la base de datos
    timestamps: false, // No se crean los campos automáticos 'createdAt' y 'updatedAt'
  }
);

// Relación Many-to-Many con el modelo 'Genero'
// Una producción puede tener múltiples géneros y un género puede estar en múltiples producciones
Produccion.belongsToMany(Genero, {
  through: {
    model: "produccion_genero", // Nombre de la tabla intermedia
    timestamps: false, // Desactivar timestamps para la tabla intermedia
  },
  foreignKey: "produccion_id", // Clave foránea que conecta con el modelo 'Produccion'
  otherKey: "genero_id", // Clave foránea que conecta con el modelo 'Genero'
});

// Relación Many-to-Many con el modelo 'Reparto'
// Una producción puede tener múltiples actores y un actor puede estar en múltiples producciones
Produccion.belongsToMany(Reparto, {
  through: {
    model: "produccion_reparto", // Nombre de la tabla intermedia
    timestamps: false, // Desactivar timestamps para la tabla intermedia
  },
  foreignKey: "produccion_id", // Clave foránea que conecta con el modelo 'Produccion'
  otherKey: "reparto_id", // Clave foránea que conecta con el modelo 'Reparto'
});

module.exports = Produccion; // Exportar el modelo para usarlo en otras partes del proyecto
