const { DataTypes } = require("sequelize");
const sequelize = require("../conexion/database");
const Producciones = require("../models/producciones");
const Generos = require("../models/generos");

// Definición del modelo 'produccion_genero' para manejar la tabla intermedia
// en la relación Many-to-Many entre 'Producciones' y 'Generos'
const produccion_genero = sequelize.define(
  "produccion_genero",
  {
    // 'produccion_id' actúa como clave foránea referenciando al modelo 'Producciones'
    produccion_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Producciones, // Referencia a la tabla 'Producciones'
        key: "produccion_id", // Clave foránea que apunta al campo 'produccion_id'
      },
      allowNull: false, // Este campo no puede ser nulo
    },
    // 'genero_id' actúa como clave foránea referenciando al modelo 'Generos'
    genero_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Generos, // Referencia a la tabla 'Generos'
        key: "genero_id", // Clave foránea que apunta al campo 'genero_id'
      },
      allowNull: false, // Este campo no puede ser nulo
    },
  },
  {
    tableName: "produccion_genero", // Nombre de la tabla en la base de datos
    timestamps: false, // No se crean los campos automáticos 'createdAt' y 'updatedAt'
  }
);

// Definición de la relación Many-to-Many entre 'Producciones' y 'Generos'
// usando la tabla intermedia 'produccion_genero'
Producciones.belongsToMany(Generos, {
  through: produccion_genero, // Tabla intermedia que conecta ambas entidades
  foreignKey: "produccion_id", // Clave foránea que conecta con la tabla 'Producciones'
  timestamps: false, // Desactivar timestamps en la relación
});

Generos.belongsToMany(Producciones, {
  through: produccion_genero, // Tabla intermedia que conecta ambas entidades
  foreignKey: "genero_id", // Clave foránea que conecta con la tabla 'Generos'
  timestamps: false, // Desactivar timestamps en la relación
});

module.exports = produccion_genero; // Exportamos el modelo para usarlo en otras partes del proyecto
